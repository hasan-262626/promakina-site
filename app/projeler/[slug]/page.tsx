import Link from "next/link";
import { notFound } from "next/navigation";
import CompostProjectExperience from "../../components/compost-project-experience";
import GenericProjectExperience from "../../components/generic-project-experience";
import { Hero } from "../../components/Hero";
import { projects } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function MetaBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "kompost-tesisi-projeleri") {
    return <CompostProjectExperience />;
  }

  if (slug === "organomineral-gubre-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Organomineral GÃ¼bre Tesisi Projeleri",
          hero: "GranÃ¼l, mikro granÃ¼l, toz ve sÄ±vÄ± organomineral gÃ¼bre Ã¼retiminde Ã¼rÃ¼n kalitesi, kapasite ve sÃ¼rdÃ¼rÃ¼lebilir iÅŸletme odaklÄ± proje Ã§Ã¶zÃ¼mleri geliÅŸtiriyoruz.",
          scenariosTitle: "Kapsanan Proje SenaryolarÄ±",
          scenarios: ["GranÃ¼l organomineral hatlar", "Mikro granÃ¼l Ã¼retim sistemleri", "Toz ve karÄ±ÅŸÄ±m gÃ¼bre hatlarÄ±", "SÄ±vÄ± organomineral Ã§Ã¶zÃ¼mler", "ZenginleÅŸtirilmiÅŸ Ã¶zel Ã¼rÃ¼n senaryolarÄ±"],
          summary: "Organomineral gÃ¼bre tesisi projelerinde hammadde hazÄ±rlama, karÄ±ÅŸÄ±m, granÃ¼lasyon, kurutma, eleme, soÄŸutma ve paketleme adÄ±mlarÄ±nÄ± Ã¼rÃ¼n tipine gÃ¶re kurguluyoruz. ÃœrÃ¼n kalitesi, granÃ¼l dayanÄ±mÄ± ve sÃ¼rekli iÅŸletme yaklaÅŸÄ±mÄ± birlikte ele alÄ±nÄ±r.",
          processFlow: "Hammadde alma â†’ dozajlama â†’ karÄ±ÅŸÄ±m hazÄ±rlama â†’ granÃ¼lasyon / formÃ¼lasyon â†’ kurutma â†’ soÄŸutma â†’ eleme â†’ geri dÃ¶nÃ¼ÅŸ â†’ paketleme / depolama",
          technicalScope: ["ÃœrÃ¼n reÃ§etesi ve proses kurgusu", "GranÃ¼lasyon ve kurutma hattÄ±", "Eleme ve geri dÃ¶nÃ¼ÅŸ sistemi", "Paketleme ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±", "Toz kontrolÃ¼ ve Ã§evresel yÃ¶netim"],
          capacity: ["DÃ¼ÅŸÃ¼k kapasiteli Ã¶zel Ã¼retim hatlarÄ±", "Orta kapasiteli yarÄ± otomatik sistemler", "YÃ¼ksek kapasiteli sÃ¼rekli Ã¼retim hatlarÄ±", "ModÃ¼ler tesis Ã§Ã¶zÃ¼mleri"],
          critical: ["GranÃ¼l dayanÄ±mÄ±", "Nem kontrolÃ¼", "Mikro granÃ¼l hassasiyeti", "Geri dÃ¶nÃ¼ÅŸ dengesi", "Son Ã¼rÃ¼n akÄ±ÅŸkanlÄ±ÄŸÄ±", "Paketleme uyumu"],
          machines: ["GranÃ¼lasyon tamburlarÄ±", "Kurutma tamburlarÄ±", "SoÄŸutma tamburlarÄ±", "Eleme sistemleri", "ReaktÃ¶rler ve tanklar", "Paketleme ve dolum sistemleri"],
          services: ["Proses TasarÄ±mÄ± ve MÃ¼hendislik", "Makine Ä°malatÄ±", "Anahtar Teslim Tesis Kurulumu", "Teknik DanÄ±ÅŸmanlÄ±k", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Organomineral gÃ¼bre hattÄ± hangi Ã¼rÃ¼nleri kapsar?", a: "GranÃ¼l, mikro granÃ¼l, toz ve sÄ±vÄ± organomineral Ã¼rÃ¼n senaryolarÄ± farklÄ± proses Ã§Ã¶zÃ¼mleri ile kapsanabilir." },
            { q: "Mikro granÃ¼l hat iÃ§in Ã¶zel ekipman gerekir mi?", a: "Evet. Tane boyutu kontrolÃ¼ ve hassas eleme nedeniyle daha Ã¶zel ekipman yaklaÅŸÄ±mÄ± gerekir." },
            { q: "Organomineral ve mineral hatlar aynÄ± mÄ±?", a: "Temel bazÄ± adÄ±mlar benzer olsa da organik iÃ§erik ve granÃ¼l karakteri nedeniyle hat kurgusu farklÄ±laÅŸÄ±r." },
            { q: "Paketleme sistemi de bu kapsama dahil mi?", a: "Evet. Torbalama, big bag dolum ve son Ã¼rÃ¼n depolama Ã§Ã¶zÃ¼mleri proje kapsamÄ±na alÄ±nabilir." },
            { q: "Mevcut hat modernize edilebilir mi?", a: "Evet. Kapasite artÄ±ÅŸÄ±, kurutma optimizasyonu ve eleme iyileÅŸtirmeleri uygulanabilir." },
            { q: "Ã–n fizibilite sonucu kesin midir?", a: "HayÄ±r. Sayfadaki sonuÃ§lar yaklaÅŸÄ±k Ã¶n deÄŸerlendirme niteliÄŸindedir." },
          ],
          cta: "Organomineral, granÃ¼l, mikro granÃ¼l ve Ã¶zel formÃ¼lasyon gÃ¼bre projeleri iÃ§in teknik yaklaÅŸÄ±mÄ± birlikte netleÅŸtirelim.",
          calculatorTitle: "Organomineral GÃ¼bre Tesisi Ã–n DeÄŸerlendirme AracÄ±",
          productOptions: ["GranÃ¼l organomineral", "Mikro granÃ¼l", "Toz gÃ¼bre", "SÄ±vÄ± organomineral"],
          processOptions: ["ÃœrÃ¼n kalitesi", "Kapasite artÄ±ÅŸÄ±", "Mikro granÃ¼l hassasiyeti", "Paketleme uyumu"],
          auto: ["Ã–nerilen granÃ¼lasyon sÄ±nÄ±fÄ±", "Ã–nerilen kurutma / soÄŸutma yapÄ±sÄ±", "Ã–nerilen eleme hassasiyeti", "Ã–nerilen paketleme sÄ±nÄ±fÄ±", "Ã–nerilen proses karakteri", "Ã–n teknik not"],
        }}
      />
    );
  }

  if (slug === "deri-atik-isleme-tesisi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Deri AtÄ±k Ä°ÅŸleme Tesisi Projeleri",
          hero: "Deri endÃ¼strisi kaynaklÄ± atÄ±klarÄ±n parÃ§alama, ayrÄ±ÅŸtÄ±rma, taÅŸÄ±ma, hidroliz ve geri kazanÄ±m odaklÄ± iÅŸlenmesine uygun tesis kurgularÄ± geliÅŸtiriyoruz.",
          scenariosTitle: "Kapsanan Proje SenaryolarÄ±",
          scenarios: ["ParÃ§alama ve kÃ¼Ã§Ã¼ltme hatlarÄ±", "TaÅŸÄ±ma ve bunker Ã§Ã¶zÃ¼mleri", "Hidroliz Ã¶n hazÄ±rlÄ±k sistemleri", "Geri kazanÄ±m odaklÄ± hat kurgusu", "Toz ve koku kontrol altyapÄ±sÄ±"],
          summary: "Deri atÄ±k iÅŸleme projelerinde malzeme karakteri, lifli yapÄ±, nem, koku ve sonraki geri kazanÄ±m adÄ±mÄ± birlikte deÄŸerlendirilir. SÃ¼rece uygun kÄ±rÄ±cÄ±, taÅŸÄ±ma ve kontrol sistemleri ile hat kurgusu oluÅŸturulur.",
          processFlow: "AtÄ±k kabulÃ¼ â†’ parÃ§alama / kÃ¼Ã§Ã¼ltme â†’ taÅŸÄ±ma â†’ ayÄ±rma / hazÄ±rlÄ±k â†’ hidroliz / geri kazanÄ±m Ã¶ncesi hazÄ±rlÄ±k â†’ depolama / sevk",
          technicalScope: ["AtÄ±k karakterizasyonu", "ParÃ§alama ve kÃ¼Ã§Ã¼ltme", "TaÅŸÄ±ma ve bunker kurgusu", "Toz / koku kontrolÃ¼", "Saha yerleÅŸim ve gÃ¼venlik yaklaÅŸÄ±mÄ±"],
          capacity: ["DÃ¼ÅŸÃ¼k kapasiteli Ã¶zel hatlar", "Orta kapasiteli yarÄ± otomatik sistemler", "SÃ¼rekli Ã§alÄ±ÅŸan endÃ¼striyel hatlar", "Projeye Ã¶zel modÃ¼ler Ã§Ã¶zÃ¼mler"],
          critical: ["Lifli ve dÃ¼zensiz besleme", "Nem ve koku yÃ¶netimi", "ParÃ§alama karakteri", "Geri kazanÄ±m adÄ±mÄ±na uygun Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±", "BakÄ±m eriÅŸimi", "Ä°ÅŸ gÃ¼venliÄŸi"],
          machines: ["ParÃ§alayÄ±cÄ± sistemler", "KÄ±rÄ±cÄ±lar", "TaÅŸÄ±ma ekipmanlarÄ±", "Bunker ve besleme sistemleri", "Toz toplama sistemleri"],
          services: ["Makine Ä°malatÄ±", "Anahtar Teslim Tesis Kurulumu", "Teknik DanÄ±ÅŸmanlÄ±k", "Proje YÃ¶netimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Deri atÄ±klar iÃ§in hangi parÃ§alayÄ±cÄ± tipi seÃ§ilir?", a: "Lifli yapÄ±, nem ve hedef parÃ§a boyutuna gÃ¶re tek milli, Ã§ift milli veya kÄ±rÄ±cÄ± kombinasyonlarÄ± deÄŸerlendirilir." },
            { q: "Toz kontrolÃ¼ gerekli midir?", a: "Evet. KÄ±rma ve taÅŸÄ±ma adÄ±mlarÄ±nda toz kontrolÃ¼ Ã§oÄŸu zaman kritik hale gelir." },
            { q: "Hidroliz Ã¶ncesi hazÄ±rlÄ±k hattÄ± kurulabilir mi?", a: "Evet. Sonraki proses ihtiyacÄ±na gÃ¶re Ã¶zel hazÄ±rlÄ±k hattÄ± kurgulanabilir." },
            { q: "Koku yÃ¶netimi nasÄ±l ele alÄ±nÄ±r?", a: "KapalÄ± alan kurgusu, lokal emiÅŸ ve proses akÄ±ÅŸÄ± birlikte deÄŸerlendirilir." },
            { q: "Hat kapasitesi neye gÃ¶re belirlenir?", a: "GÃ¼nlÃ¼k atÄ±k miktarÄ±, Ã§alÄ±ÅŸma sÃ¼resi ve sonraki proses adÄ±mÄ±nÄ±n kabul kapasitesine gÃ¶re belirlenir." },
            { q: "Bu sayfadaki sonuÃ§lar kesin midir?", a: "HayÄ±r. SonuÃ§lar Ã¶n fizibilite niteliÄŸinde deÄŸerlendirilmelidir." },
          ],
          cta: "Deri atÄ±k iÅŸleme projeniz iÃ§in parÃ§alama, taÅŸÄ±ma ve geri kazanÄ±m odaklÄ± teknik yaklaÅŸÄ±mÄ± birlikte netleÅŸtirelim.",
          calculatorTitle: "Deri AtÄ±k Ä°ÅŸleme Ã–n DeÄŸerlendirme AracÄ±",
          productOptions: ["Lifli deri atÄ±ÄŸÄ±", "KarÄ±ÅŸÄ±k proses atÄ±ÄŸÄ±", "Nemli deri fraksiyonu", "Geri kazanÄ±m Ã¶n Ã¼rÃ¼nÃ¼"],
          processOptions: ["ParÃ§alama Ã¶nceliÄŸi", "Toz kontrolÃ¼", "Geri kazanÄ±m hazÄ±rlÄ±ÄŸÄ±", "SÃ¼rekli iÅŸletme"],
          auto: ["Ã–nerilen parÃ§alama sÄ±nÄ±fÄ±", "Ã–nerilen taÅŸÄ±ma karakteri", "Ã–nerilen bunker yapÄ±sÄ±", "Ã–nerilen toz kontrol notu", "Ã–nerilen servis sÄ±nÄ±fÄ±", "Ã–n teknik not"],
        }}
      />
    );
  }

  if (slug === "biyogaz-ve-atik-yonetimi-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: "Biyogaz ve AtÄ±k YÃ¶netimi Projeleri",
          hero: "Biyogaz besleme, organik madde hazÄ±rlama, digestat yÃ¶netimi, atÄ±k iÅŸleme ve yan Ã¼rÃ¼n deÄŸerlendirme odaklÄ± entegre proje yapÄ±larÄ± geliÅŸtiriyoruz.",
          scenariosTitle: "Kapsanan Proje SenaryolarÄ±",
          scenarios: ["Besleme ve Ã¶n iÅŸleme hatlarÄ±", "Digestat yÃ¶netimi", "Organik madde hazÄ±rlama", "AtÄ±k yÃ¶netimi entegrasyonu", "Yan Ã¼rÃ¼n deÄŸerlendirme Ã§Ã¶zÃ¼mleri"],
          summary: "Biyogaz ve atÄ±k yÃ¶netimi projelerinde dÃ¼zenli besleme, malzeme homojenliÄŸi, tampon stok, taÅŸÄ±ma altyapÄ±sÄ± ve digestat sonrasÄ± yÃ¶netim birlikte deÄŸerlendirilir.",
          processFlow: "AtÄ±k kabulÃ¼ â†’ Ã¶n parÃ§alama / ayÄ±rma â†’ tampon stok â†’ dozajlÄ± besleme â†’ biyogaz / proses hattÄ± â†’ digestat yÃ¶netimi â†’ yan Ã¼rÃ¼n deÄŸerlendirme",
          technicalScope: ["AtÄ±k ve organik madde karakterizasyonu", "Besleme ve tampon stok planlamasÄ±", "ParÃ§alama ve hazÄ±rlÄ±k hattÄ±", "Digestat yÃ¶netimi", "Koku ve saha yÃ¶netimi"],
          capacity: ["KÃ¼Ã§Ã¼k Ã¶lÃ§ekli organik madde hazÄ±rlÄ±k sistemleri", "Orta kapasiteli yarÄ± otomatik besleme hatlarÄ±", "YÃ¼ksek kapasiteli entegre biyogaz altyapÄ±larÄ±", "Projeye Ã¶zel modÃ¼ler tesis Ã§Ã¶zÃ¼mleri"],
          critical: ["Besleme sÃ¼rekliliÄŸi", "Malzeme homojenliÄŸi", "Digestat sonrasÄ± akÄ±ÅŸ", "Koku ve Ã§evresel yÃ¶netim", "Tampon stok kapasitesi", "BakÄ±m eriÅŸimi"],
          machines: ["Depolama ve besleme sistemleri", "TaÅŸÄ±ma ekipmanlarÄ±", "KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar", "Toz ve koku kontrol sistemleri", "ReaktÃ¶r ve tank altyapÄ±sÄ±"],
          services: ["Anahtar Teslim Tesis Kurulumu", "Proses TasarÄ±mÄ± ve MÃ¼hendislik", "Teknik DanÄ±ÅŸmanlÄ±k", "Proje YÃ¶netimi ve Saha Koordinasyonu"],
          faqs: [
            { q: "Biyogaz besleme sistemi neye gÃ¶re belirlenir?", a: "Girdi tipi, gÃ¼nlÃ¼k tonaj, homojenlik ihtiyacÄ± ve besleme sÃ¼rekliliÄŸine gÃ¶re belirlenir." },
            { q: "Digestat yÃ¶netimi proje kapsamÄ±na alÄ±nabilir mi?", a: "Evet. Digestat depolama, taÅŸÄ±ma ve sonrasÄ± deÄŸerlendirme Ã§Ã¶zÃ¼mleri proje kapsamÄ±na dahil edilebilir." },
            { q: "KarÄ±ÅŸÄ±k organik fraksiyonlar iÃ§in Ã¶n iÅŸleme gerekir mi?", a: "Ã‡oÄŸu zaman evet. ParÃ§alama, ayÄ±rma ve homojenizasyon adÄ±mlarÄ± Ã¶nemlidir." },
            { q: "Bunker ve tampon stok neden Ã¶nemlidir?", a: "Besleme sÃ¼rekliliÄŸi ve proses kararlÄ±lÄ±ÄŸÄ± iÃ§in kritik rol oynar." },
            { q: "AÃ§Ä±k ve kapalÄ± sistem birlikte Ã§alÄ±ÅŸabilir mi?", a: "Evet. Prosesin farklÄ± bÃ¶lÃ¼mlerinde farklÄ± sistem karakterleri kullanÄ±labilir." },
            { q: "Bu araÃ§ kesin proje hesabÄ± verir mi?", a: "HayÄ±r. YaklaÅŸÄ±k Ã¶n fizibilite desteÄŸi saÄŸlar." },
          ],
          cta: "Biyogaz ve atÄ±k yÃ¶netimi projeniz iÃ§in besleme, hazÄ±rlama ve digestat yÃ¶netimi odaklÄ± yaklaÅŸÄ±mÄ± birlikte netleÅŸtirelim.",
          calculatorTitle: "Biyogaz ve AtÄ±k YÃ¶netimi Ã–n DeÄŸerlendirme AracÄ±",
          productOptions: ["Organik atÄ±k hazÄ±rlama", "Biyogaz besleme hattÄ±", "Digestat yÃ¶netimi", "Entegre atÄ±k iÅŸleme"],
          processOptions: ["Besleme sÃ¼rekliliÄŸi", "Homojenizasyon", "Koku kontrolÃ¼", "Yan Ã¼rÃ¼n deÄŸerlendirme"],
          auto: ["Ã–nerilen besleme sÄ±nÄ±fÄ±", "Ã–nerilen tampon stok notu", "Ã–nerilen parÃ§alama yaklaÅŸÄ±mÄ±", "Ã–nerilen digestat yÃ¶netimi", "Ã–nerilen sistem karakteri", "Ã–n teknik not"],
        }}
      />
    );
  }

  if (slug === "ozel-proses-ve-makine-imalati-projeleri" || slug === "mineral-ve-dokme-kati-isleme-projeleri") {
    return (
      <GenericProjectExperience
        config={{
          title: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "Ã–zel Proses ve Makine Ä°malatÄ± Projeleri" : "Mineral ve DÃ¶kme KatÄ± Ä°ÅŸleme Projeleri",
          hero: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Sahaya Ã¶zel Ã¶lÃ§Ã¼, kapasite ve proses ihtiyacÄ±na gÃ¶re uyarlanmÄ±ÅŸ Ã¶zel makina, proses hattÄ± ve endÃ¼striyel sistem Ã§Ã¶zÃ¼mleri geliÅŸtiriyoruz."
            : "KÄ±rma, eleme, taÅŸÄ±ma, kurutma, sÄ±nÄ±flandÄ±rma ve stoklama sÃ¼reÃ§lerine uygun mineral ve dÃ¶kme katÄ± malzeme proje Ã§Ã¶zÃ¼mleri geliÅŸtiriyoruz.",
          scenariosTitle: "Kapsanan Proje SenaryolarÄ±",
          scenarios: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Ã–zel makina imalatÄ±", "Standart dÄ±ÅŸÄ± proses hatlarÄ±", "Sahaya Ã¶zel entegrasyon", "Modifikasyon ve uyarlama", "Pilot Ã¶lÃ§ekten Ã¼retime geÃ§iÅŸ"]
            : ["KÄ±rma ve eleme hatlarÄ±", "Kurutma ve sÄ±nÄ±flandÄ±rma", "TaÅŸÄ±ma ve stoklama", "DÃ¶kme katÄ± hazÄ±rlama", "Mineral proses entegrasyonu"],
          summary: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Standart katalog Ã§Ã¶zÃ¼mlerinin yeterli olmadÄ±ÄŸÄ± projelerde; proses ihtiyacÄ±, saha sÄ±nÄ±rlarÄ± ve hedef kapasiteye gÃ¶re Ã¶zel mÃ¼hendislik yaklaÅŸÄ±mÄ± geliÅŸtiriyoruz."
            : "Mineral ve dÃ¶kme katÄ± iÅŸleme projelerinde Ã¼rÃ¼n karakteri, aÅŸÄ±nma, toz, kurutma ihtiyacÄ± ve stoklama yaklaÅŸÄ±mÄ± birlikte deÄŸerlendirilir.",
          processFlow: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Ä°htiyaÃ§ analizi â†’ Ã¶zel tasarÄ±m â†’ mÃ¼hendislik doÄŸrulama â†’ imalat â†’ saha entegrasyonu â†’ devreye alma"
            : "Hammadde kabulÃ¼ â†’ kÄ±rma / eleme â†’ taÅŸÄ±ma â†’ kurutma / sÄ±nÄ±flandÄ±rma â†’ stoklama / sevk",
          technicalScope: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Ã–zel tasarÄ±m ekipman", "MÃ¼hendislik ve projelendirme", "AtÃ¶lye imalat sÃ¼reci", "Saha uyarlama ve entegrasyon", "Test ve devreye alma"]
            : ["ÃœrÃ¼n karakterizasyonu", "KÄ±rma ve eleme yaklaÅŸÄ±mÄ±", "TaÅŸÄ±ma ve stoklama kurgusu", "Toz ve aÅŸÄ±nma yÃ¶netimi", "Kurutma / son iÅŸlem yaklaÅŸÄ±mÄ±"],
          capacity: ["DÃ¼ÅŸÃ¼k kapasiteli Ã¶zel Ã§Ã¶zÃ¼mler", "Orta kapasiteli modÃ¼ler hatlar", "YÃ¼ksek kapasiteli sÃ¼rekli sistemler", "Projeye Ã¶zel Ã¶lÃ§ekleme"],
          critical: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Standart dÄ±ÅŸÄ± gereksinimler", "Saha Ã¶lÃ§Ã¼leri", "Entegrasyon uyumu", "Ã–zel malzeme seÃ§imi", "Test ve doÄŸrulama", "BakÄ±m eriÅŸimi"]
            : ["AÅŸÄ±nma ve toz yÃ¶netimi", "KÄ±rma karakteri", "Kurutma ihtiyacÄ±", "Stoklama yaklaÅŸÄ±mÄ±", "ÃœrÃ¼n ayrÄ±ÅŸtÄ±rma verimi", "Hat sÃ¼rekliliÄŸi"],
          machines: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["ReaktÃ¶rler ve tanklar", "Tambur sistemleri", "TaÅŸÄ±ma ekipmanlarÄ±", "KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar", "Ã–zel yardÄ±mcÄ± ekipmanlar"]
            : ["KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar", "Eleme ve sÄ±nÄ±flandÄ±rma sistemleri", "TaÅŸÄ±ma ekipmanlarÄ±", "Tambur sistemleri", "Depolama ve besleme sistemleri"],
          services: ["Makine Ä°malatÄ±", "Proses TasarÄ±mÄ± ve MÃ¼hendislik", "Anahtar Teslim Tesis Kurulumu", "Teknik DanÄ±ÅŸmanlÄ±k", "Modernizasyon ve Revizyon"],
          faqs: [
            { q: "Projeye Ã¶zel tasarÄ±m yapÄ±labilir mi?", a: "Evet. Standart dÄ±ÅŸÄ± kapasite, Ã¶lÃ§Ã¼ ve proses ihtiyaÃ§larÄ±na gÃ¶re Ã¶zel Ã§Ã¶zÃ¼m geliÅŸtirilebilir." },
            { q: "Saha kÄ±sÄ±tlarÄ±na gÃ¶re proje uyarlanÄ±r mÄ±?", a: "Evet. YerleÅŸim, eriÅŸim ve entegrasyon kÄ±sÄ±tlarÄ± proje kurgusuna dahil edilir." },
            { q: "Test ve doÄŸrulama yapÄ±lÄ±r mÄ±?", a: "Proje kapsamÄ±na gÃ¶re test, pilot Ã§alÄ±ÅŸma veya saha doÄŸrulama yaklaÅŸÄ±mÄ± uygulanabilir." },
            { q: "Mevcut hatlara entegrasyon mÃ¼mkÃ¼n mÃ¼?", a: "Evet. Mevcut sistemlerle uyumlu entegrasyon Ã§Ã¶zÃ¼mleri geliÅŸtirilebilir." },
            { q: "Ã–n fizibilite hangi bilgileri verir?", a: "Kapasite sÄ±nÄ±fÄ±, proses karakteri ve genel sistem yaklaÅŸÄ±mÄ± hakkÄ±nda Ã¶n karar desteÄŸi saÄŸlar." },
            { q: "Bu sonuÃ§lar kesin midir?", a: "HayÄ±r. Nihai mÃ¼hendislik doÄŸrulamasÄ± gereklidir." },
          ],
          cta: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? "Ã–zel proses ve makine imalat projeniz iÃ§in saha, kapasite ve entegrasyon ihtiyaÃ§larÄ±nÄ± birlikte netleÅŸtirelim."
            : "Mineral ve dÃ¶kme katÄ± iÅŸleme projeniz iÃ§in kÄ±rma, eleme, taÅŸÄ±ma ve stoklama yaklaÅŸÄ±mÄ±nÄ± birlikte netleÅŸtirelim.",
          calculatorTitle: slug === "ozel-proses-ve-makine-imalati-projeleri" ? "Ã–zel Proses Projesi Ã–n DeÄŸerlendirme AracÄ±" : "Mineral ve DÃ¶kme KatÄ± Ä°ÅŸleme Ã–n DeÄŸerlendirme AracÄ±",
          productOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Ã–zel makina", "Ã–zel proses hattÄ±", "Saha entegrasyon projesi", "Pilot Ã¶lÃ§ek proje"]
            : ["Mineral kurutma", "KÄ±rma ve eleme", "DÃ¶kme katÄ± taÅŸÄ±ma", "Stoklama ve sÄ±nÄ±flandÄ±rma"],
          processOptions: slug === "ozel-proses-ve-makine-imalati-projeleri"
            ? ["Entegrasyon", "Performans artÄ±ÅŸÄ±", "Ã–zel imalat", "Saha uyumu"]
            : ["AÅŸÄ±nma yÃ¶netimi", "Toz kontrolÃ¼", "Kapasite artÄ±ÅŸÄ±", "ÃœrÃ¼n ayrÄ±ÅŸtÄ±rma"],
          auto: ["Ã–nerilen sistem sÄ±nÄ±fÄ±", "Ã–nerilen proses karakteri", "Ã–nerilen servis sÄ±nÄ±fÄ±", "Ã–nerilen makina yaklaÅŸÄ±mÄ±", "Ã–nerilen entegrasyon notu", "Ã–n teknik not"],
        }}
      />
    );
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Hero
        title={trText(project.title)}
        description={trText(project.summary)}
        image={project.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetaBox label="Proje adÄ±" value={trText(project.projectName)} />
          <MetaBox label="Lokasyon" value={project.location} />
          <MetaBox label="Kapasite" value={project.capacity} />
          <MetaBox label="MÃ¼ÅŸteri tipi" value={trText(project.customerType)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">SÃ¼reÃ§ Ã¶zeti</h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(project.processSummary)}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Teknik kapsam</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {project.technicalScope.map((item) => (
                <li key={item}>{trText(item)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">FotoÄŸraflar</h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(project.photosNote)}</p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
              Proje fotoÄŸraflarÄ± alanÄ±
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">KullanÄ±lan sistemler</h2>
            <div className="mt-4 grid gap-3">
              {project.systems.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">SonuÃ§ / kazanÄ±mlar</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {project.outcomes.map((item) => (
                <li key={item}>{trText(item)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-blue-700 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Benzer proje</h2>
            <p className="mt-4 text-white/82">{trText(project.similarProject)}</p>
            <div className="mt-6">
              <Link
                href="/projeler"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                DiÄŸer Projeleri Ä°ncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Bu projede kullanÄ±lan makinalar</h3>
            <div className="mt-4 grid gap-3">
              {project.relatedMachines.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ä°lgili sektÃ¶r</h3>
            <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
              {trText(project.relatedSector)}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Benzer Ã§Ã¶zÃ¼mler</h3>
            <div className="mt-4 grid gap-3">
              {project.relatedSolutions.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            CTA
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Benzer proje ihtiyacÄ±nÄ±z iÃ§in bizimle iletiÅŸime geÃ§in.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Lokasyon, kapasite ve proses hedeflerinizi paylaÅŸÄ±n; size uygun proje yapÄ±sÄ±nÄ± birlikte netleÅŸtirelim.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@promakina.com.tr"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              E-posta GÃ¶nder
            </a>
            <a
              href="tel:+905380631163"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


