export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">PRO MAKİNA</h1>
        <nav className="space-x-6">
          <a href="#">Ana Sayfa</a>
          <a href="#">Hizmetler</a>
          <a href="#">Projeler</a>
          <a href="#">İletişim</a>
        </nav>
      </header>

      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Endüstriyel Gübre ve Makine Sistemleri
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Kompost, organomineral gübre, konveyör ve endüstriyel tesis çözümlerinde profesyonel mühendislik.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Kompost Tesisleri</h3>
          <p>Evsel ve organik atıklardan yüksek kaliteli kompost üretimi.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Gübre Üretim Hatları</h3>
          <p>Granül ve sıvı gübre tesisleri anahtar teslim çözümler.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Konveyör Sistemleri</h3>
          <p>Endüstriyel taşıma ve otomasyon sistemleri.</p>
        </div>
      </section>

      <footer className="text-center p-6 border-t border-gray-700 text-gray-400">
        © 2026 PRO MAKİNA
      </footer>

    </main>
  );
}