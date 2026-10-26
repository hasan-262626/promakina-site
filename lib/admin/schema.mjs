// Admin veritabanı şeması. Hem Next.js sunucusu hem de `npm run admin:create` CLI'ı bu dosyayı kullanır.
// Sürümler yalnızca eklenir; yayımlanmış bir migration değiştirilmez.

export const migrations = [
  {
    version: 1,
    sql: `
      create table if not exists admin_users (
        id uuid primary key default gen_random_uuid(),
        email text not null unique,
        name text not null,
        password_hash text not null,
        role text not null check (role in ('SUPER_ADMIN', 'ADMIN', 'EDITOR')),
        active boolean not null default true,
        failed_count integer not null default 0,
        locked_until timestamptz,
        last_login_at timestamptz,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );

      create table if not exists admin_sessions (
        id uuid primary key default gen_random_uuid(),
        token_hash text not null unique,
        user_id uuid not null references admin_users(id) on delete cascade,
        created_at timestamptz not null default now(),
        last_seen_at timestamptz not null default now(),
        expires_at timestamptz not null,
        ip_hash text,
        user_agent text
      );
      create index if not exists admin_sessions_user_idx on admin_sessions(user_id);

      create table if not exists admin_login_attempts (
        id bigserial primary key,
        email_hash text not null,
        ip_hash text not null,
        success boolean not null,
        created_at timestamptz not null default now()
      );
      create index if not exists admin_login_attempts_ip_idx on admin_login_attempts(ip_hash, created_at);
      create index if not exists admin_login_attempts_email_idx on admin_login_attempts(email_hash, created_at);

      create table if not exists admin_audit_log (
        id bigserial primary key,
        user_id uuid,
        user_email text,
        action text not null,
        target text,
        detail jsonb,
        ip_hash text,
        created_at timestamptz not null default now()
      );
      create index if not exists admin_audit_log_created_idx on admin_audit_log(created_at desc);

      create table if not exists rate_limits (
        key text primary key,
        count integer not null,
        reset_at timestamptz not null
      );

      create table if not exists leads (
        id uuid primary key default gen_random_uuid(),
        kind text not null check (kind in ('contact', 'rfq')),
        status text not null default 'NEW'
          check (status in ('NEW', 'CONTACTED', 'QUOTED', 'WON', 'LOST', 'SPAM')),
        full_name text,
        company text,
        email text,
        phone text,
        country text,
        subject text,
        message text,
        product text,
        sector text,
        source_page text,
        locale text,
        details jsonb,
        attachment_name text,
        attachment_size integer,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );
      create index if not exists leads_kind_created_idx on leads(kind, created_at desc);

      create table if not exists lead_notes (
        id bigserial primary key,
        lead_id uuid not null references leads(id) on delete cascade,
        author_id uuid,
        author_email text,
        note text not null,
        created_at timestamptz not null default now()
      );

      create table if not exists redirects (
        id uuid primary key default gen_random_uuid(),
        source text not null unique,
        destination text not null,
        status_code integer not null check (status_code in (301, 302, 307, 308)),
        enabled boolean not null default true,
        created_by text,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );

      create table if not exists health_scans (
        id uuid primary key default gen_random_uuid(),
        started_by text,
        status text not null default 'running' check (status in ('running', 'done', 'failed')),
        total integer not null default 0,
        scanned integer not null default 0,
        queue jsonb not null default '[]'::jsonb,
        started_at timestamptz not null default now(),
        finished_at timestamptz
      );

      create table if not exists health_results (
        scan_id uuid not null references health_scans(id) on delete cascade,
        url text not null,
        status integer,
        title text,
        description text,
        h1_count integer,
        h1 text,
        canonical text,
        robots text,
        hreflang_count integer,
        hreflang jsonb,
        missing_alt integer,
        lang text,
        og_title text,
        og_description text,
        og_image text,
        schema_types text,
        in_sitemap boolean not null default true,
        links jsonb,
        primary key (scan_id, url)
      );
    `,
  },
];

migrations.push({
  version: 2,
  sql: `
    -- İçerik: dil başına taslak ve yayındaki sürüm (TR source-of-truth; "shared" dil bağımsız görseller).
    create table if not exists content_documents (
      type text not null,
      doc_id text not null,
      locale text not null check (locale in ('tr', 'en', 'ru', 'ar', 'shared')),
      draft jsonb,
      draft_updated_at timestamptz,
      draft_updated_by text,
      published jsonb,
      published_at timestamptz,
      published_by text,
      synced_tr_hash text,
      primary key (type, doc_id, locale)
    );

    create table if not exists content_revisions (
      id bigserial primary key,
      type text not null,
      doc_id text not null,
      locale text not null,
      action text not null,
      data jsonb,
      previous jsonb,
      user_email text,
      created_at timestamptz not null default now()
    );
    create index if not exists content_revisions_doc_idx on content_revisions(type, doc_id, locale, created_at desc);

    create table if not exists cms_state (
      id integer primary key check (id = 1),
      version bigint not null default 0
    );
    insert into cms_state (id, version) values (1, 0) on conflict (id) do nothing;

    create table if not exists media_assets (
      id uuid primary key default gen_random_uuid(),
      url text not null unique,
      storage_key text not null,
      driver text not null,
      mime text not null,
      size integer not null,
      width integer,
      height integer,
      original_name text,
      title text,
      alt jsonb not null default '{}'::jsonb,
      uploaded_by text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

    alter table admin_users add column if not exists totp_secret_enc text;
    alter table admin_users add column if not exists totp_pending_enc text;
    alter table admin_users add column if not exists totp_enabled boolean not null default false;
    alter table admin_users add column if not exists totp_last_counter bigint;

    create table if not exists admin_recovery_codes (
      id bigserial primary key,
      user_id uuid not null references admin_users(id) on delete cascade,
      code_hash text not null,
      used_at timestamptz
    );
    create index if not exists admin_recovery_codes_user_idx on admin_recovery_codes(user_id);

    create table if not exists admin_mfa_challenges (
      token_hash text primary key,
      user_id uuid not null references admin_users(id) on delete cascade,
      attempts integer not null default 0,
      expires_at timestamptz not null,
      ip_hash text,
      user_agent text
    );

    create table if not exists integration_checks (
      name text primary key,
      status text not null,
      detail text,
      checked_at timestamptz not null default now(),
      checked_by text
    );

    create table if not exists csp_reports (
      directive text not null,
      blocked text not null,
      page text not null,
      count integer not null default 1,
      first_seen timestamptz not null default now(),
      last_seen timestamptz not null default now(),
      primary key (directive, blocked, page)
    );
  `,
});

export const ROLES = ["SUPER_ADMIN", "ADMIN", "EDITOR"];
