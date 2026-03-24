const contacts = [
  {
    role: "Makine Mühendisi",
    name: "Ahmet Yılmaz",
    phone: "+90 538 063 11 63",
    whatsapp: "https://wa.me/905380631163",
    email: "ahmet@promakina.com.tr",
  },
  {
    role: "Türkiye Bölge Müdürü",
    name: "Mehmet Demir",
    phone: "+90 532 456 78 90",
    whatsapp: "https://wa.me/905324567890",
    email: "mehmet@promakina.com.tr",
  },
  {
    role: "Satış Temsilcisi",
    name: "Ayşe Kaya",
    phone: "+90 533 987 65 43",
    whatsapp: "https://wa.me/905339876543",
    email: "ayse@promakina.com.tr",
  },
];

const interestAreas = [
  "Kompost Tesisi",
  "Gübre Tesisi",
  "Makina ve Ekipman",
  "Biyogaz",
  "Teknik Danışmanlık",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="site-container">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            İletişim
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Sadece iletişim değil, doğrudan dönüşüm odaklı teklif ve yönlendirme sayfası.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Projenizi, ilgi alanınızı ve ülke bilginizi bırakmanız; talebin daha hızlı doğru
            kişiye ve doğru hizmet hattına yönlendirilmesini sağlar.
          </p>
        </div>
      </section>

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
                  Kurumsal iletişim bilgileri
                </h2>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Adres
                    </p>
                    <p className="mt-2 text-slate-800">İstanbul, Türkiye</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Çalışma saatleri
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
                Talebinizi doğru birime hızlı yönlendirmek için aşağıdaki bilgileri doldurun.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Ad Soyad"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Firma Adı"
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
                  placeholder="Ülke"
                />
                <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2">
                  <option>İlgilendiği alan</option>
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
                Teklif Gönder
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            İletişim kişileri
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
