import Link from "next/link";

const relatedServices = [
  {
    title: "Organomineral Gübre Tesisi Kurulumu",
    href: "/hizmetler/organomineral-gubre-tesisi",
    description:
      "Organik ve mineral bileşenleri dengeli biçimde işleyen, granül kalite ve proses kararlılığı odaklı tesis çözümleri sunuyoruz.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description:
      "Granülasyon, kurutma, soğutma ve eleme süreçlerini birlikte yöneten yüksek verimli üretim hatları tasarlıyoruz.",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    href: "/hizmetler/sivi-gubre-uretim-tesisi",
    description:
      "Sıvı organomineral, amino asitli ve NPK ürün grupları için esnek formülasyon ve dolum altyapıları geliştiriyoruz.",
  },
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description:
      "Anahtar teslim mühendislik, makine imalatı, montaj ve devreye alma süreçlerini tek merkezden yönetiyoruz.",
  },
];

export function RelatedServiceLinks() {
  return (
    <section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">İlgili Hizmetler</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Bu sektöre uygun hizmet çözümlerimizi inceleyin
        </h2>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {relatedServices.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
              Hizmeti İncele
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
