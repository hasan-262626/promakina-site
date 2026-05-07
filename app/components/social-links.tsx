import { siteSocialProfiles } from "../lib/site-contact";

type SocialId = (typeof siteSocialProfiles)[number]["id"];

type SocialLinksProps = {
  variant?: "compact" | "button";
  className?: string;
};

function SocialIcon({ id, className = "h-4 w-4" }: { id: SocialId; className?: string }) {
  if (id === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55C7.14 3.8 6.25 3 5.25 3S3.36 3.8 3.36 4.95c0 1.12.87 1.95 1.87 1.95h.02c1.03 0 1.9-.83 1.9-1.95ZM20.64 13.06c0-3.52-1.88-5.16-4.39-5.16-2.02 0-2.92 1.11-3.42 1.89V8.5H9.45c.04.86 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.94-1.39 1.37 0 1.92 1.05 1.92 2.59V20h3.38v-6.94Z" />
      </svg>
    );
  }

  if (id === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M21.58 7.19a2.96 2.96 0 0 0-2.08-2.1C17.67 4.6 12 4.6 12 4.6s-5.67 0-7.5.49A2.96 2.96 0 0 0 2.42 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .42 4.81 2.96 2.96 0 0 0 2.08 2.1c1.83.49 7.5.49 7.5.49s5.67 0 7.5-.49a2.96 2.96 0 0 0 2.08-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.42-4.81ZM10.2 15.14V8.86L15.73 12l-5.53 3.14Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.92 1.54a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

export function SocialLinks({ variant = "button", className = "" }: SocialLinksProps) {
  const baseClass =
    variant === "compact"
      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
      : "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {siteSocialProfiles.map((profile) => (
        <a
          key={profile.id}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.label}
          className={baseClass}
        >
          <SocialIcon id={profile.id} className={variant === "compact" ? "h-4 w-4" : "h-4 w-4"} />
          {variant === "button" ? <span>{profile.label}</span> : null}
        </a>
      ))}
    </div>
  );
}

export { SocialIcon };
