import Link from "next/link";
import { createWhatsAppHref, siteContact } from "../lib/site-contact";

export function ProgramCtaSection() {
  const whatsappHref = createWhatsAppHref(
    "Merhaba, hesaplama aracınızı kullandım. Makine seçimi ve teknik teklif için görüşmek istiyorum.",
  );

  return (
    <section className="pb-14 pt-4">
      <div className="site-container">
        <div className="rounded-[26px] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-amber-900">
            <span className="font-semibold">Önemli not:</span> Bu hesaplama ön
            mühendislik amaçlıdır. Kesin makine seçimi, kapasite doğrulaması ve
            imalat kararı için Pro Makina teknik ekibiyle görüşülmelidir.
          </p>
        </div>
        <div className="mt-5 rounded-[26px] border border-[#278DC0]/20 bg-[#154764] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold sm:text-2xl">
                Hesap sonucunuzu birlikte değerlendirelim
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Kapasite, malzeme ve proses bilgilerinizi paylaşın; makine seçimi
                ve teknik teklifinizi mühendislik ekibimiz hazırlasın.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#1f7cab]"
              >
                Teknik Teklif Al
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                WhatsApp ile Bilgi Al
              </a>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {siteContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-[#154764]">İlgili sayfalar:</span>
          {[
            { href: "/makinalar-ekipman/tambur-sistemleri", label: "Tambur Sistemleri" },
            { href: "/makinalar-ekipman/tasima-ekipmanlari", label: "Taşıma Ekipmanları" },
            { href: "/makinalar-ekipman", label: "Tüm Makinalar" },
            { href: "/programlar", label: "Tüm Hesaplama Araçları" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[38px] items-center rounded-full border border-slate-200 bg-white px-4 font-medium text-slate-700 transition hover:border-[#278DC0] hover:text-[#154764]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
