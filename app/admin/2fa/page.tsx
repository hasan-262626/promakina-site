import Link from "next/link";
import type { Metadata } from "next";
import QRCode from "qrcode";
import { getDb } from "@/lib/admin/db-core";
import { mfaStatus, pendingSecret } from "@/lib/admin/mfa";
import { needsMfaEnrollment, requireUser } from "@/lib/admin/server";
import { mfaRequiredFor, otpauthUri } from "@/lib/admin/totp";
import { logoutAction } from "../actions";
import { confirmMfaEnrollmentAction, disableOwnMfaAction, regenerateRecoveryCodesAction, startMfaEnrollmentAction } from "../mfa-actions";
import { MfaCodeForm } from "../_components/mfa-forms";
import { buttonClass, secondaryButtonClass } from "../_components/ui";

export const metadata: Metadata = { title: "İki adımlı doğrulama" };

/** 2FA kurulum ve yönetim. Rolü için zorunlu olan kullanıcı kurulumu bitirmeden panelin diğer sayfalarına giremez. */
export default async function MfaSetupPage() {
  const user = await requireUser();
  const db = await getDb();
  const status = await mfaStatus(db, user.id);
  const required = mfaRequiredFor(user.role);
  const secret = !status.enabled ? await pendingSecret(db, user.id) : null;
  // QR kod sunucuda SVG olarak üretilir (dış servis yok); gizli anahtar yalnız kurulum sırasında, yalnız hesabın sahibine gösterilir.
  const qrSvg = secret ? await QRCode.toString(otpauthUri(user.email, secret), { type: "svg", margin: 1, width: 200, errorCorrectionLevel: "M" }) : null;

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#278DC0]">Pro Makina</p>
        <h1 className="mt-2 text-xl font-semibold text-slate-900">İki adımlı doğrulama (2FA)</h1>
        <p className="mt-1 text-sm text-slate-600">
          {user.email} · {status.enabled ? "Etkin" : "Etkin değil"}
          {required ? " · Rolünüz için zorunlu" : ""}
        </p>

        {needsMfaEnrollment(user) ? (
          <p role="alert" className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Panelin geri kalanını kullanmadan önce iki adımlı doğrulamayı etkinleştirmeniz gerekiyor.
          </p>
        ) : null}

        {status.enabled ? (
          <div className="mt-6 space-y-6">
            <p className="text-sm text-slate-700">Kullanılmamış kurtarma kodu: {status.remainingRecoveryCodes} / 10</p>
            <section>
              <h2 className="mb-2 text-sm font-semibold">Yeni kurtarma kodları üret</h2>
              <MfaCodeForm action={regenerateRecoveryCodesAction} submitLabel="Kodları yenile" label="Uygulamadaki 6 haneli kod" />
            </section>
            {!required ? (
              <section>
                <h2 className="mb-2 text-sm font-semibold">2FA&apos;yı kapat</h2>
                <MfaCodeForm action={disableOwnMfaAction} submitLabel="Kapat" label="Uygulamadaki 6 haneli kod" />
              </section>
            ) : null}
            <Link href="/admin" className={secondaryButtonClass}>
              Panele dön
            </Link>
          </div>
        ) : secret && qrSvg ? (
          <div className="mt-6 space-y-5">
            <ol className="list-decimal space-y-1 ps-5 text-sm text-slate-700">
              <li>Google Authenticator, Microsoft Authenticator, 1Password vb. bir doğrulama uygulaması açın.</li>
              <li>QR kodu okutun veya anahtarı elle girin.</li>
              <li>Uygulamanın gösterdiği 6 haneli kodu aşağıya yazın.</li>
            </ol>
            <div className="flex flex-wrap items-center gap-5">
              <div className="rounded-lg border border-slate-200 bg-white p-2" aria-label="2FA kurulum QR kodu" role="img" dangerouslySetInnerHTML={{ __html: qrSvg }} />
              <div className="min-w-0">
                <p className="text-xs text-slate-500">Elle giriş anahtarı</p>
                <p className="break-all font-mono text-sm tracking-wider" data-testid="mfa-secret">
                  {secret.replace(/(.{4})/g, "$1 ").trim()}
                </p>
              </div>
            </div>
            <MfaCodeForm action={confirmMfaEnrollmentAction} submitLabel="Doğrula ve etkinleştir" label="6 haneli kod" />
          </div>
        ) : (
          <form action={startMfaEnrollmentAction} className="mt-6">
            <button className={buttonClass}>Kurulumu başlat</button>
          </form>
        )}

        <form action={logoutAction} className="mt-8">
          <button className="text-xs text-slate-500 underline">Çıkış yap</button>
        </form>
      </div>
    </main>
  );
}
