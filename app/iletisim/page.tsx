import { Hero } from "../components/Hero";

const contacts = [
  {
    role: "Makine MÃ¼hendisi",
    name: "Ahmet YÄ±lmaz",
    phone: "+90 538 063 11 63",
    whatsapp: "https://wa.me/905380631163",
    email: "ahmet@promakina.com.tr",
  },
  {
    role: "TÃ¼rkiye BÃ¶lge MÃ¼dÃ¼rÃ¼",
    name: "Mehmet Demir",
    phone: "+90 532 456 78 90",
    whatsapp: "https://wa.me/905324567890",
    email: "mehmet@promakina.com.tr",
  },
  {
    role: "SatÄ±ÅŸ Temsilcisi",
    name: "AyÅŸe Kaya",
    phone: "+90 533 987 65 43",
    whatsapp: "https://wa.me/905339876543",
    email: "ayse@promakina.com.tr",
  },
];

const interestAreas = [
  "Kompost Tesisi",
  "GÃ¼bre Tesisi",
  "Makina ve Ekipman",
  "Biyogaz",
  "Teknik DanÄ±ÅŸmanlÄ±k",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="İletişim"
        description="Makina, tesis, proses tasarımı, teknik danışmanlık veya proje talepleriniz için bizimle iletişime geçin. İhtiyacınıza uygun çözüm yapısını, kapasite yaklaşımını ve teknik kapsamı birlikte netleştirelim."
        image="/images/fabrika1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-950">Google Maps</h2>
                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                  <iframe
                    title="Pro Makina Harita"
                    src="https://www.google.com/maps?q=Istanbul&output=embed"
                    className="h-[320px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-950">
                  Kurumsal iletiÅŸim bilgileri
                </h2>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Adres
                    </p>
                    <p className="mt-2 text-slate-800">Ä°stanbul, TÃ¼rkiye</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Ã‡alÄ±ÅŸma saatleri
                    </p>
                    <p className="mt-2 text-slate-800">Pazartesi - Cuma / 09:00 - 18:00</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Kurumsal e-posta
                    </p>
                    <a
                      href="mailto:info@promakina.com.tr"
                      className="mt-2 block text-slate-800 hover:text-blue-700"
                    >
                      info@promakina.com.tr
                    </a>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/905380631163"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      WhatsApp&apos;tan Yaz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Teklif formu</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Talebinizi doÄŸru birime hÄ±zlÄ± yÃ¶nlendirmek iÃ§in aÅŸaÄŸÄ±daki bilgileri doldurun.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Ad Soyad"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Firma AdÄ±"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Telefon"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="E-posta"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2"
                  placeholder="Ãœlke"
                />
                <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2">
                  <option>Ä°lgilendiÄŸi alan</option>
                  {interestAreas.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <textarea
                  className="min-h-[160px] rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2"
                  placeholder="Mesaj"
                />
              </div>

              <button className="mt-6 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Teklif GÃ¶nder
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Ä°letiÅŸim kiÅŸileri
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contacts.map((person) => (
              <div
                key={person.email}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                  {person.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{person.name}</h3>
                <div className="mt-6 space-y-3 text-slate-600">
                  <a href={`tel:${person.phone.replace(/\s+/g, "")}`} className="block hover:text-blue-700">
                    {person.phone}
                  </a>
                  <a
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-green-600"
                  >
                    WhatsApp
                  </a>
                  <a href={`mailto:${person.email}`} className="block hover:text-blue-700">
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


