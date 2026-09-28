# Görsel Kaynakları ve Lisans Kayıtları

Bu dosya, sitede kullanılan görsellerin kaynak ve lisans bilgilerini kayıt altında tutar.

- Üçüncü taraf görsellerin herkese açık atıf sayfası: `/gorsel-kaynaklari` (footer'daki "Görsel Kaynakları ve Lisanslar" bağlantısı).
- Sayfanın veri kaynağı: `app/(tr)/lib/image-credits.ts`.
- Yeni bir dış kaynaklı görsel eklendiğinde **hem** `image-credits.ts` dosyasına **hem de** bu dosyaya kaydedin. CC BY lisanslı görsellerde yazar, eser adı, kaynak ve lisans bağlantısı zorunludur; atıf sayfasından kaldırılmamalıdır.

## 1. Üçüncü taraf görseller (Wikimedia Commons)

Lisanslar, Wikimedia Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Tüm görseller 4:3 oranında kırpılmış, 1200×900 piksele küçültülmüş ve WebP biçimine dönüştürülmüştür.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak |
|---|---|---|---|---|---|---|
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Açık renkli, ince taneli kum | Gfp-grainy-sand-texture.jpg | Yinan Chen | Kamu malı (Public Domain) | Hayır | https://commons.wikimedia.org/wiki/File:Gfp-grainy-sand-texture.jpg |
| `public/images/kurutma-uygulamalari/ham-perlit.webp` | Kırılmış ve elenmiş ham perlit | Crushed & screened perlite (Hollinger Quarry, Wilson Creek Range, Nevada, USA) | James St. John | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Crushed_%26_screened_perlite_(Hollinger_Quarry,_Wilson_Creek_Range,_Nevada,_USA).jpg |
| `public/images/kurutma-uygulamalari/ahsap-talasi.webp` | Tesis içinde ahşap talaşı yığınları | Wood Shavings ET5A7982 (30567130696) | Intermountain Region US Forest Service | Kamu malı (Public Domain) | Hayır | https://commons.wikimedia.org/wiki/File:Wood_Shavings_ET5A7982_(30567130696).jpg |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Kırılmış kireç taşı yığınları | Crushed limestone gravel piles (Maxville Limestone, …) 1 (43229436840) | James St. John | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Crushed_limestone_gravel_piles_(Maxville_Limestone,_Mississippian;_quarry_near_East_Fultonham,_Muskingum_County,_Ohio,_USA)_1_(43229436840).jpg |
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Granül gübre (kalsiyum amonyum nitrat) | Calcium Ammonium Nitrate Pellets.png | Dawid3030 | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | Hayır | https://commons.wikimedia.org/wiki/File:Calcium_Ammonium_Nitrate_Pellets.png |

Kullanıldığı sayfa: `/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu` (Uygulamalar bölümü kartları).

## 1b. Diğer tambur ürün sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür. CC BY-SA görsellerinde atıf ve aynı lisansla paylaşım koşulu geçerlidir; değiştirilmiş hâlleri de aynı lisans altındadır.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/tambur-uygulamalari/kompoze-gubre-granul.webp` | Kahverengi kompoze gübre granülleri | Compound fertiliser.jpg | Wee Hong | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Compound_fertiliser.jpg | Granülatör Tamburu |
| `public/images/tambur-uygulamalari/amonyum-nitrat-granul.webp` | Amonyum nitrat gübre granülleri | Нитрат аммония в виде удобрения.jpg | Alit Variatos | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B8%D1%82%D1%80%D0%B0%D1%82_%D0%B0%D0%BC%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F_%D0%B2_%D0%B2%D0%B8%D0%B4%D0%B5_%D1%83%D0%B4%D0%BE%D0%B1%D1%80%D0%B5%D0%BD%D0%B8%D1%8F.jpg | Soğutma Tamburu |
| `public/images/tambur-uygulamalari/potasyum-klorur-kompakt.webp` | Kompakt potasyum klorür (gübre kalitesi) | Compacted potassium chloride, fertilizer grade.jpg | Abbas cucaniensis | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Compacted_potassium_chloride,_fertilizer_grade.jpg | Soğutma Tamburu |
| `public/images/tambur-uygulamalari/ure-granul.webp` | Üre granülleri | Sample of Urea.jpg | LHcheM | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Sample_of_Urea.jpg | Kaplama Tamburu |
| `public/images/tambur-uygulamalari/kalsiyum-amonyum-nitrat.webp` | Kalsiyum amonyum nitrat granülleri | Kalkammonsalpeter.jpg | Rasbak | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Kalkammonsalpeter.jpg | Kaplama Tamburu |
| `public/images/tambur-uygulamalari/dap-granul.webp` | DAP (diamonyum fosfat) granülleri | DAP (Diammonium Phosphate) Granules (1).jpg | Suyash Dwivedi | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:DAP_(Diammonium_Phosphate)_Granules_(1).jpg | Kaplama Tamburu |
| `public/images/tambur-uygulamalari/harman-gubre.webp` | Harman (bulk-blend) gübre | Bulk-blend fertiliser.jpg | Wee Hong | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Bulk-blend_fertiliser.jpg | Karıştırma Tamburu |
| `public/images/tambur-uygulamalari/potasyum-magnezyum-sulfat.webp` | Potasyum magnezyum sülfat (patentkali) | Patentkali (Potassium sulfate with magnesium).jpg | Rasbak | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Patentkali_(Potassium_sulfate_with_magnesium).jpg | Karıştırma Tamburu |

## 1c. Taşıma Ekipmanları sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür. "Soybean Meal" görselinde kaynak, atfın United Soybean Board / Soybean Checkoff'a yapılmasını istemektedir.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/tasima-uygulamalari/komur-parca.webp` | Parça kömür yığını | Coal lumps.jpg | Nostrifikator | [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/) | **Evet** | https://commons.wikimedia.org/wiki/File:Coal_lumps.jpg | Zincirli Elevatörler |
| `public/images/tasima-uygulamalari/soya-tahil-bosaltma.webp` | Depoya boşaltılan soya taneleri | Soja exportacao.jpg | Roosewelt Pinheiro/Abr | [CC BY 3.0 br](https://creativecommons.org/licenses/by/3.0/br/deed.en) | **Evet** | https://commons.wikimedia.org/wiki/File:Soja_exportacao.jpg | Bantlı Elevatörler |
| `public/images/tasima-uygulamalari/sonmemis-kirec-tozu.webp` | Sönmemiş kireç (kalsiyum oksit) tozu | Calcium oxide powder.JPG | Leiem | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Calcium_oxide_powder.JPG | Zincirli Elevatörler |
| `public/images/tasima-uygulamalari/plastik-granul.webp` | Enjeksiyon için renkli plastik granüller | Plastic pellets for injection molding.jpg | Teemeah | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Plastic_pellets_for_injection_molding.jpg | Bantlı Elevatörler |
| `public/images/tasima-uygulamalari/klinker.webp` | Çimento fırınından çıkan klinker | Clinker coming out of Superior Kiln.jpg | 凰兰时罗 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Clinker_coming_out_of_Superior_Kiln.jpg | Zincirli Elevatörler |
| `public/images/tasima-uygulamalari/soya-kuspesi.webp` | Soya küspesi | Soybean Meal (10059014026).jpg | United Soybean Board | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Soybean_Meal_(10059014026).jpg | Bantlı Elevatörler |

## 1d. Kırıcılar ve Parçalayıcılar sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/kirici-uygulamalari/beton-yikinti.webp` | Beton ve yıkıntı atıkları | Demolition waste.jpg | User:Petr K | [CC BY 2.5](https://creativecommons.org/licenses/by/2.5) | **Evet** | https://commons.wikimedia.org/wiki/File:Demolition_waste.jpg | Çeneli Kırıcılar |
| `public/images/kirici-uygulamalari/agrega-konisi.webp` | Konveyörden oluşan agrega yığını | Conveyor and stockpile of aggregate (7548492690).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Conveyor_and_stockpile_of_aggregate_(7548492690).jpg | Dik Milli Kırıcılar |
| `public/images/kirici-uygulamalari/agrega-stok.webp` | Konveyörler altında agrega stokları | Malcolms aggregate stockpile conveyors (7520035716).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Malcolms_aggregate_stockpile_conveyors_(7520035716).jpg | Çekiçli Kırıcılar |
| `public/images/kirici-uygulamalari/alcitasi.webp` | Beyaz alçıtaşı parçası | Gypsum (12249949575).jpg | James Petts from London, England | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Gypsum_(12249949575).jpg | Çekiçli Kırıcılar |
| `public/images/kirici-uygulamalari/demir-cevheri-ocak.webp` | Açık ocak madeninde cevher yüzeyi | Sub vertical band of iron ore - panoramio.jpg | Martin Tuchscherer | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Sub_vertical_band_of_iron_ore_-_panoramio.jpg | Çeneli Kırıcılar |
| `public/images/kirici-uygulamalari/m-kum.webp` | Kırma kum (M-kum) | M-Sand in Salem.jpg | Thamizhpparithi Maari | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:M-Sand_in_Salem.jpg | Dik Milli Kırıcılar |
| `public/images/kirici-uygulamalari/kaya-tuzu.webp` | Kaya tuzu parçası | Rock salt (halitite) (Billianwala Salt Member, Salt Range Formation, Ediacaran to Lower Cambrian; Khewra Salt Mine, Salt Range, Pakistan) 11 (33275221442).jpg | James St. John | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Rock_salt_(halitite)_(Billianwala_Salt_Member,_Salt_Range_Formation,_Ediacaran_to_Lower_Cambrian;_Khewra_Salt_Mine,_Salt_Range,_Pakistan)_11_(33275221442).jpg | Çekiçli Kırıcılar |
| `public/images/kirici-uygulamalari/kompost-yigini.webp` | Serilmiş kompost | Compost final 3.jpg | Bernard Dejean | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Compost_final_3.jpg | Zincirli Kırıcılar |
| `public/images/kirici-uygulamalari/tas-ocagi-ayna.webp` | Delme izli taş ocağı kaya yüzeyi | Ebelsbach Steinbruch -20200405-RM-160714.jpg | Reinhold Möller Ermell | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Ebelsbach_Steinbruch_-20200405-RM-160714.jpg | Çeneli Kırıcılar |
| `public/images/kirici-uygulamalari/kirmatas-yakin.webp` | Koyu renkli kırmataş taneleri | Sunlit Crushed Stones.jpg | Paul The Writer | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | Hayır | https://commons.wikimedia.org/wiki/File:Sunlit_Crushed_Stones.jpg | Dik Milli Kırıcılar |
| `public/images/kirici-uygulamalari/dolomit-ocak.webp` | Dolomit ocağında kaya yüzeyi | 7092 pieskovna Dolinka pri Hradisti pod Vratnom dolomit.JPG | Ondrej Pelech | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) | **Evet** | https://commons.wikimedia.org/wiki/File:7092_pieskovna_Dolinka_pri_Hradisti_pod_Vratnom_dolomit.JPG | Bıçaklı Primer Kırıcılar |
| `public/images/kirici-uygulamalari/bantta-cevher.webp` | Konveyörde yıkanmış cevher | M2500 stockpile conveyor and washed iron ore (6325636374).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:M2500_stockpile_conveyor_and_washed_iron_ore_(6325636374).jpg | Bıçaklı Sekonder Kırıcılar |
| `public/images/kirici-uygulamalari/elek-kirma-hatti.webp` | Kırma-eleme tesisinde elek | Prograde screen view from aggregate stockpile conveyor walkway (6237694023).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Prograde_screen_view_from_aggregate_stockpile_conveyor_walkway_(6237694023).jpg | Bıçaklı Sekonder Kırıcılar |
| `public/images/kirici-uygulamalari/ahsap-palet.webp` | İstiflenmiş ahşap paletler | Wooden pallets dubai.jpg | Nadeem55 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Wooden_pallets_dubai.jpg | Shredder Sistemleri |
| `public/images/kirici-uygulamalari/geri-donusum-sahasi.webp` | Yıkıntı malzemesinin işlendiği saha | Queens, N.Y., Jan. 18, 2013 -- Debris from Hurricane Sandy is processed at the Jacob Riis Park in Rockaway, N.Y. where the U.S. Army Corps of Engineers works to sort it into piles f - DPLA - e0713f858dabead01f8a93cbaf49b919.jpg | Department of Homeland Security. Federal Emergency Management Agency. Public Aff | Public domain | Hayır | https://commons.wikimedia.org/wiki/File:Queens,_N.Y.,_Jan._18,_2013_--_Debris_from_Hurricane_Sandy_is_processed_at_the_Jacob_Riis_Park_in_Rockaway,_N.Y._where_the_U.S._Army_Corps_of_Engineers_works_to_sort_it_into_piles_f_-_DPLA_-_e0713f858dabead01f8a93cbaf49b919.jpg | Bıçaklı Primer Kırıcılar |
| `public/images/kirici-uygulamalari/kirmatas-gabion.webp` | Tel kafes içinde kırılmış taş | Stone crushed into building material.jpg | BogTar201213 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Stone_crushed_into_building_material.jpg | Bıçaklı Sekonder Kırıcılar |
| `public/images/kirici-uygulamalari/plastik-atik.webp` | Karışık plastik atıklar | Plastic waste pollution.jpg | Mandeiya flower | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Plastic_waste_pollution.jpg | Shredder Sistemleri |
| `public/images/kirici-uygulamalari/organik-gubre-cuval.webp` | Organik gübre çuvalları | Pallets of organic fertilizer for sale at the Hybla Valley Wal-Mart.jpg | Ser Amantio di Nicolao | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Pallets_of_organic_fertilizer_for_sale_at_the_Hybla_Valley_Wal-Mart.jpg | Zincirli Kırıcılar |
| `public/images/kirici-uygulamalari/karma-atik.webp` | Karışık belediye atığı | Open dumping of municipal solid waste beside a forest.jpg | Earthinators | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Open_dumping_of_municipal_solid_waste_beside_a_forest.jpg | Shredder Sistemleri |

## 1e. Reaktörler ve Tanklar sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, 1200×900 piksele küçültülmüş (sıvı potasyum humat özgün 1024×768 boyutunda korunmuştur) ve WebP'ye dönüştürülmüştür.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/tank-uygulamalari/sodyum-hidroksit.webp` | Sodyum hidroksit peletleri | SodiumHydroxide.jpg | Walkerma | Kamu malı (Public Domain) | Hayır | https://commons.wikimedia.org/wiki/File:SodiumHydroxide.jpg | Soğutma Tankları, Çözündürme Tankları |
| `public/images/tank-uygulamalari/sivi-potasyum-humat.webp` | Suda dağılan sıvı potasyum humat | Liquid Potassium Humate.jpg | UlmicA | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Liquid_Potassium_Humate.jpg | Soğutma Tankları, Stok Tankları |
| `public/images/tank-uygulamalari/leonardit.webp` | İşlenmiş (öğütülmüş) leonardit | Processed leonardite (Stony Creek Mine, North Dakota, USA) - 54338193629.jpg | James St. John | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Processed_leonardite_(Stony_Creek_Mine,_North_Dakota,_USA)_-_54338193629.jpg | Karıştırıcılı Reaktörler |
| `public/images/tank-uygulamalari/can-gubre-pelet.webp` | Kalsiyum amonyum nitrat gübre peletleri | Calcium Ammonium Nitrate Pellets.png | Dawid3030 | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | Hayır | https://commons.wikimedia.org/wiki/File:Calcium_Ammonium_Nitrate_Pellets.png | Karıştırıcılı Reaktörler, Basınçlı Reaktörler |
| `public/images/tank-uygulamalari/aerasyon-havuzu.webp` | Atık su arıtma tesisinde havalandırma havuzu | Aeration tank activated sludge process STP Bengaluru India.jpg | Vraj Acharya, WELL Labs | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Aeration_tank_activated_sludge_process_STP_Bengaluru_India.jpg | Karıştırıcılı Reaktörler |
| `public/images/tank-uygulamalari/kimya-proses-tesisi.webp` | Kimyasal proses tesisi (üre fabrikası) | Urea process plant UFFL 01.jpg | Mar11 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Urea_process_plant_UFFL_01.jpg | Basınçlı Reaktörler, Stok Tankları |
| `public/images/tank-uygulamalari/potasyum-nitrat.webp` | Potasyum nitrat gübresi | Potassium Nitrate 13-0-45 KNO3 fertilizer (4).jpg | Suyash Dwivedi | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Potassium_Nitrate_13-0-45_KNO3_fertilizer_(4).jpg | Çözündürme Tankları |

## 1f. Eleme ve Sınıflandırma sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, en fazla 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür. Bu görseller başka üreticilerin (CDE, Sheehan vb.) makinelerini gösterir; sayfalarda PRO MAKİNA ürünü olarak değil, "örnek proses görseli" etiketiyle kullanılır ve Product yapılandırılmış verisine eklenmez.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/eleme-uygulamalari/susuzlandirilmis-cevher.webp` | Susuzlandırma eleği üzerinde yıkanmış cevher (örnek görsel) | Iron ore washed and dewatered on Evoscreen dewatering screen (6325985626).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Iron_ore_washed_and_dewatered_on_Evoscreen_dewatering_screen_(6325985626).jpg | Susuzlandırma Elekleri |
| `public/images/eleme-uygulamalari/poliuretan-elek-paneli.webp` | Susuzlandırma eleğinde poliüretan elek panelleri (örnek görsel) | CDE EvoWash dewatering screen deck (8402122338).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:CDE_EvoWash_dewatering_screen_deck_(8402122338).jpg | Susuzlandırma Elekleri |
| `public/images/eleme-uygulamalari/geri-kazanilmis-agrega.webp` | Susuzlandırma eleği üzerinde geri kazanılmış agrega | Recycled aggs on Aggmax dewatering screen (6240238750).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Recycled_aggs_on_Aggmax_dewatering_screen_(6240238750).jpg | Susuzlandırma Elekleri |
| `public/images/eleme-uygulamalari/yikanmis-kum-stoku.webp` | Kum yıkama tesisi ve yıkanmış kum stokları | Evowash CFCU sand washing plant and washed sand stockpiles (5080571881).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Evowash_CFCU_sand_washing_plant_and_washed_sand_stockpiles_(5080571881).jpg | Susuzlandırma Elekleri |
| `public/images/eleme-uygulamalari/sulu-elek-nozullar.webp` | Püskürtme nozullu yıkama eleği yüzeyi (örnek görsel) | Prograde rinsing screen (6024890037).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Prograde_rinsing_screen_(6024890037).jpg | Sulu Elekler |
| `public/images/eleme-uygulamalari/sulu-elek-ust-kat.webp` | Yıkama eleği üst katında su dağıtım boruları (örnek görsel) | Top deck of Prograde rinsing screen (6325986080).jpg | Peter Craven | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Top_deck_of_Prograde_rinsing_screen_(6325986080).jpg | Sulu Elekler |

Daha önce kaydedilmiş ve bu sayfalarda yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Vibrasyonlu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Vibrasyonlu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/kirmatas-yakin.webp` | Vibrasyonlu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/kompost-yigini.webp` | Trommel Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/karma-atik.webp` | Trommel Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/agrega-stok.webp` | Trommel Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/m-kum.webp` | Susuzlandırma Elekleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Sulu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/agrega-konisi.webp` | Sulu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/bantta-cevher.webp` | Sulu Elekler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 1g. Toz Toplama sayfaları (Wikimedia Commons)

Lisans Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görsel 4:3 kırpılmış, 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür. Başka bir üreticinin ürününü gösterdiği için sayfada "örnek proses görseli" etiketiyle kullanılır ve Product yapılandırılmış verisine eklenmez.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/toz-uygulamalari/islak-gaz-yikayici.webp` | Sirkülasyon tanklı ıslak gaz yıkama ünitesi (başka üreticinin ürünü; örnek görsel) | Eltecna AG T20 Wäscher.jpg | Seilerseiler | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Eltecna_AG_T20_W%C3%A4scher.jpg | Baca Yıkama (Scrubber) Sistemleri |

Daha önce kaydedilmiş ve bu sayfalarda yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Jet Pulse Filtreler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Jet Pulse Filtreler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/alcitasi.webp` | Jet Pulse Filtreler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/ham-perlit.webp` | Siklon Ayırıcılar | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Siklon Ayırıcılar | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/ahsap-talasi.webp` | Siklon Ayırıcılar | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tank-uygulamalari/kimya-proses-tesisi.webp` | Baca Yıkama (Scrubber) Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tank-uygulamalari/can-gubre-pelet.webp` | Baca Yıkama (Scrubber) Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/kompost-yigini.webp` | Baca Yıkama (Scrubber) Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 1h. Paketleme ve Dolum sayfaları (Wikimedia Commons)

Lisanslar Commons API'sinin `extmetadata` alanından doğrulanmıştır (Eylül 2026). Görseller 4:3 kırpılmış, en fazla 1200×900 piksele küçültülmüş ve WebP'ye dönüştürülmüştür. Paletleme robotu görselleri başka üreticilerin ekipmanını gösterir; sayfada "örnek proses görseli" etiketiyle kullanılır, Product yapılandırılmış verisine ana görsel olarak eklenmez ve metinde robot markası belirtilmez.

| Yerel dosya | İçerik | Orijinal eser | Yazar | Lisans | Atıf zorunlu | Kaynak | Sayfa |
|---|---|---|---|---|---|---|---|
| `public/images/paket-uygulamalari/robotlu-paletleme.webp` | Kolileri palete dizen paletleme robotu (örnek görsel, başka üreticinin ekipmanı) | Automatic Palletizer Robot.jpg | Killgore1138 | [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en) | Hayır | https://commons.wikimedia.org/wiki/File:Automatic_Palletizer_Robot.jpg | Paletleme Hatları |
| `public/images/paket-uygulamalari/torba-paletleme.webp` | Torbaları palete dizen robot (örnek görsel) | Robot-pallet.jpg | Robotcongnghiep | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Robot-pallet.jpg | Paletleme Hatları |
| `public/images/paket-uygulamalari/gubre-big-bag.webp` | Palet üzerinde dolu gübre big-bag torbaları | Flexible intermediate bulk containers-Fertilizer.jpg | Cjp24 | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Flexible_intermediate_bulk_containers-Fertilizer.jpg | Big Bag Dolum |
| `public/images/paket-uygulamalari/etiketli-kimyasal-bidon.webp` | Tehlike etiketli plastik kimyasal bidonu | Battery fluid, plastic bottle.jpg | Cjp24 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | **Evet** | https://commons.wikimedia.org/wiki/File:Battery_fluid,_plastic_bottle.jpg | Şişe Etiketleme Makinası |

Daha önce kaydedilmiş ve bu sayfalarda yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Açık Ağız Torbalama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/alcitasi.webp` | Açık Ağız Torbalama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Açık Ağız Torbalama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Big Bag Dolum | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Big Bag Dolum | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/organik-gubre-cuval.webp` | Paletleme Hatları | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tank-uygulamalari/sivi-potasyum-humat.webp` | Sıvı Dolum Şişeleme | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tank-uygulamalari/sodyum-hidroksit.webp` | Sıvı Dolum Şişeleme | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 1i. Depolama ve Besleme sayfaları (Wikimedia Commons)

Bu sayfalar için yeni dış kaynaklı görsel indirilmedi. Daha önce kaydedilmiş ve yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Silo Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Silo Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Silo Sistemleri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Bunker ve Hazneler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/tas-ocagi-ayna.webp` | Bunker ve Hazneler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Teremi Bunkeri | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 1j. Yardımcı Ekipmanlar ve Akış Sistemleri sayfaları (Wikimedia Commons)

Bu sayfalar için yeni dış kaynaklı görsel indirilmedi. Daha önce kaydedilmiş ve yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/kurutma-uygulamalari/granul-gubre.webp` | Yükleme Körüğü | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Yükleme Körüğü | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/paket-uygulamalari/gubre-big-bag.webp` | Distribütör | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tambur-uygulamalari/kompoze-gubre-granul.webp` | Distribütör | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tambur-uygulamalari/dap-granul.webp` | Klapeler | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/plastik-granul.webp` | Hava Kilidi | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/sonmemis-kirec-tozu.webp` | Hava Kilidi | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/plastik-granul.webp` | Blower | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/klinker.webp` | Blower | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 1k. Dozajlama Sistemleri sayfaları (Wikimedia Commons)

Bu sayfalar için yeni dış kaynaklı görsel indirilmedi. Daha önce kaydedilmiş ve yeniden kullanılan Commons görselleri:

| Yerel dosya | Yeni kullanıldığı sayfa | Not |
|---|---|---|
| `public/images/tambur-uygulamalari/harman-gubre.webp` | Mikro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tank-uygulamalari/kimya-proses-tesisi.webp` | Mikro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/soya-kuspesi.webp` | Mikro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/kirec-tasi.webp` | Makro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/kaya-tuzu.webp` | Makro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kurutma-uygulamalari/silis-kumu.webp` | Makro Dozajlama | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tambur-uygulamalari/potasyum-klorur-kompakt.webp` | Dozaj Bant Kantarı | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/kirici-uygulamalari/dolomit-ocak.webp` | Dozaj Bant Kantarı | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |
| `public/images/tasima-uygulamalari/klinker.webp` | Dozaj Bant Kantarı | Kayıt mevcut (ilk kullanım bölümünde); aynı lisans ve atıf geçerli |

## 2. Proje içindeki diğer görseller (Kurutma Tamburu sayfası)

Aşağıdaki görseller projenin `public/images/tambur kurutma/` klasöründe hazır bulunuyordu ve dış kaynaktan indirilmedi. Projede sahiplik veya lisans kaydı yoktur; PRO MAKİNA tarafından kendi arşivine ait olduğunun doğrulanması önerilir.

| Dosya | Sayfadaki kullanımı |
|---|---|
| `tamkurutma25.jpg` | Ana görsel, Open Graph ve Product şeması görseli |
| `tamkurutma19.jpg` | "Özel Tambur Çözümleri" uygulama kartı |
| `tamkurutma21.jpg` | Tasarım ve İmalat tanıtım görseli |
| `tamkurutma1, 4, 5, 6, 7, 10, 11, 12, 16, 18, 20, 22, 27, 29, 30.jpg` | Ürün galerisi |

Notlar:

- `tamkurutma24.png` ve `tamkurutma25.jpg` 1536×1024 ölçülü, render (bilgisayar üretimi) görünümlü görsellerdir. `tamkurutma24.png` bu nedenle galeriye alınmadı; `tamkurutma25.jpg` önceki SEO çalışmasında ana görsel olarak seçildiği için korundu. Gerçek fotoğraf olup olmadığı doğrulanmalıdır.
- `public/images/sektorler/maden/` altındaki silis, perlit, kalsit ve feldspat görselleri de render görünümlü tesis sahneleridir; hammadde görseli olarak kullanılmadı.
- `tamkurutma2, 8, 15, 17.jpg` dosyaları projede duruyor ancak şu an Kurutma Tamburu sayfasında kullanılmıyor.

## 3. Proje içindeki görseller (diğer tambur ürün sayfaları)

Aşağıdaki görseller projenin `public/images/` klasöründe hazır bulunuyordu; dış kaynaktan indirilmedi. Projede sahiplik veya lisans kaydı yoktur, doğrulanması önerilir.

| Dosya | Kullanıldığı sayfa ve yer |
|---|---|
| `tambur granulator/tamgranulator1.png` | Granülatör Tamburu ana görsel (render görünümlü) |
| `tambur granulator/tamgranulator3.png` | Granülatör Tamburu Tasarım ve İmalat görseli (render görünümlü) |
| `tambur granulator/tamgranulator4.png` | Karıştırma Tamburu ana görsel (granülatör görseliyle aynı seriden, render görünümlü) |
| `tambur sogutma/tamsogutma1.png` | Soğutma Tamburu ana görsel (render görünümlü) |
| `tambur kaplama/tamkaplama1.png` | Kaplama Tamburu ana görsel (render görünümlü) |
| `tambur biokompost/biokom1.png` | Kompost Tamburu ve Sterilizasyon/Stabilizasyon Tamburu ana görseli (iki sayfada ortak, render görünümlü) |
| `tambur kurutma/tamkurutma14.jpg` | Özel Tambur ana görsel |
| `tambur kurutma/tamkurutma17.jpg`, `tamkurutma2.jpg`, `tamkurutma15.jpg` | Özel Tambur uygulama kartları |
| `01-genel/gran2.jpg`, `01-genel/gran4.jpg` | Granülatör Tamburu uygulama kartları |
| `01-genel/gran1.jpg` | Soğutma Tamburu uygulama kartı |
| `01-genel/yem1.jpg` | Karıştırma Tamburu uygulama kartı |
| `01-genel/evselkompost1.jpg`, `kompost/kompost7.jpg`, `01-genel/digesta2.jpg`, `kompost/kompost1.jpg` | Kompost Tamburu uygulama kartları |
| `01-genel/atıksucamuru.jpg`, `01-genel/digesta1.webp`, `kompost/kompost6.jpg` | Sterilizasyon ve Stabilizasyon Tamburu uygulama kartları |

`01-genel` ve `kompost` klasöründeki görseller stok fotoğraf görünümlüdür; lisans durumlarının kontrol edilmesi önerilir.

## 4. Proje içindeki görseller (Taşıma Ekipmanları sayfaları)

Aşağıdaki görseller projenin `public/images/` klasöründe hazır bulunuyordu ve önceki sayfa sürümünde de ürün galerilerinde kullanılıyordu. Projede sahiplik veya lisans kaydı yoktur; PRO MAKİNA arşivine ait olduklarının doğrulanması önerilir.

| Ürün | Kullanılan dosyalar |
|---|---|
| Bantlı Konveyörler | `konveyor/konvey2, 29, 30, 19, 1, 9, 8, 14, 32, 38, 25, 11, 7, 18, 24, 23, 39`, `konveyor/konveyor3` |
| Zincirli Konveyörler | `konveyor zincirli/konveyorzinc15, 22, 4, 32, 1, 13, 14, 16, 17, 18, 19, 20, 25, 27, 29, 31, 3` |
| Tripper Arabalı Konveyör | `konveyor tripper/konevtrip3, 5, 6, 2` |
| Vidalı Helezonlar | `helezon/helezon39, 11, 40, 22, 23, 4, 5, 9, 10, 15, 21, 24, 29, 30, 31, 35, 36, 41` |
| Zincirli Elevatörler | `elevator zincirli/elevzinc1, 4, 5, 6, 7, 10` |
| Bantlı Elevatörler | `elevator-bantli/elevbant13, 6, 2, 4, 9, 11, 15, 16, 17, 18, 20, 23, 24, 29` (`elevator bantlı` klasöründeki orijinallerin kopyası; boşluk + Türkçe karakter içeren klasör adı üretim görsel optimizasyonunda 400 hatası verdiği için) |

Kullanılmayanlar: render/CAD görünümlü dosyalar (ör. `konvey5, 15, 16, 26, 27, 28`, `konveyorzinc10, 11, 12, 23, 24`, `helezon2, 14, 28`, `elevzinc2, 3`), literatürden alınmış görünen teknik çizim (`elevzinc9`) ve Zincirli Konveyör galerisindeki Z tipi elevatör görseli (`elevator z/konveyorzinc9`).

## 5. Proje içindeki görseller (Kırıcılar ve Parçalayıcılar sayfaları)

Aşağıdaki görseller projenin `public/images/` klasöründe hazır bulunuyordu ve önceki sayfa sürümünde de kullanılıyordu. Projede sahiplik veya lisans kaydı yoktur; doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Çekiçli Kırıcılar | `kirici cekicli/kiricicekic1, 4` | `kiricicekic1` render görünümlü; `kiricicekic2` kesit illüstrasyonu olduğu için kullanılmadı |
| Çeneli Kırıcılar | `kirici ceneli/kiriciceneli1, 4, 5, 7, 6, 3` | `kiriciceneli1, 3, 4, 6, 7` stüdyo/render görünümlü |
| Dik Milli Kırıcılar | `kirici dik milli/kiricidikmil8, 3, 1, 4, 5, 7` | `kiricidikmil2, 6, 9` render olduğu için kullanılmadı |
| Zincirli Kırıcılar | `kirici zincirli/kiricizincir1, 6, 10, 2, 3, 4, 5, 7, 9` | Atölye fotoğrafları |
| Shredder Sistemleri | `kirici shredder/kiricishred7, 8, 2, 3, 4, 6, 1` | `kiricishred1` render görünümlü |
| Bıçaklı Primer Kırıcılar | `kirici primer 1/kiricibirinci6, 2, 1, 3, 4, 5` | Stüdyo fotoğrafları |
| Bıçaklı Sekonder Kırıcılar | `kirici seconder/kiriciseconder2, 5, 1, 3, 4` | Stüdyo fotoğrafları; primer kırıcıdan farklı görsel seti |

## 6. Proje içindeki görseller (Reaktörler ve Tanklar sayfaları)

Aşağıdaki görseller projenin `public/images/sıvı/` (ve `sivi dolum/`) klasöründe hazır bulunuyordu; ASCII olmayan klasör adı görsel optimizasyonunda hata verdiği için `public/images/reaktor-tank/` klasörüne kopyalanarak kullanıldı (orijinaller yerinde duruyor). Projede sahiplik veya lisans kaydı yoktur. Bir kısmında üçüncü taraf izleri görüldüğü için kullanım hakkının doğrulanması önerilir; sayfalarda bu görseller PRO MAKİNA projesi olarak etiketlenmemiştir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Soğutma Tankları | `sivi14` (ana görsel), `sivi dolum/sividol1` (uygulama kartı) | `sivi14` şarap/içecek tesisine ait stok fotoğraf görünümlü |
| Karıştırıcılı Reaktörler | `sivi4` (ana görsel), `sivi3` (tasarım görseli) | Kaynağı bilinmiyor; `sivi3` üzerinde daire işareti var |
| Basınçlı Reaktörler | `sivi11` (ana görsel), `sivi12` (tasarım görseli), `sivi13, 8, 10` (galeri) | Aynı yabancı atölye setine ait görünüyor; tarafsız açıklamalarla kullanıldı |
| Çözündürme Tankları | `sivi2` (ana görsel) | Bir karıştırıcı üreticisinin tanıtım fotoğrafı görünümlü; doğrulanmalı |
| Stok Tankları | `sivi21` (ana görsel), `sivi5` (tasarım görseli), `sivi22` (uygulama kartı) | Stok fotoğraf görünümlü |

Kullanılmayan görseller: `sivi9` (üzerinde başka bir firmaya ait işaret görülüyor), `sivi6` (yapay zekâ ile üretilmiş görünümlü), `sivi1`, `sivi23`. Kategori hero görseli `siyah beyaz/tank 1.jpg` üzerinde iStock filigranı bulunuyor; bu görsel ürün sayfalarında artık kullanılmıyor ancak kategori sayfasında (değiştirilmedi) hâlâ kullanılıyor.

## 7. Proje içindeki görseller (Eleme ve Sınıflandırma sayfaları)

Projede sahiplik veya lisans kaydı yoktur; doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Vibrasyonlu Elekler | `elek/elek2` (ana görsel), `elek/elek1` (tasarım görseli) | `elek2` saha fotoğrafı görünümlü |
| Trommel Elekler | `trommel/tromm11` (ana), `tromm3` (tasarım), `tromm6, 12, 14, 17, 16, 13, 4` (galeri) | Render görünümlü `tromm1, 2, 5, 7, 9, 10` ve `tromm11` ile neredeyse aynı olan `tromm18` kullanılmadı; bir kısmı yabancı tesis fotoğrafı görünümlü |
| Susuzlandırma Elekleri | — | Projede susuzlandırma eleği fotoğrafı yok; önceki sayfa trommel görsellerini gösteriyordu |
| Sulu Elekler | — | Projede sulu elek fotoğrafı yok |

## 8. Proje içindeki görseller (Toz Toplama sayfaları)

Projede sahiplik veya lisans kaydı yoktur; doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Jet Pulse Filtreler | `jet pulse/jerpul4` (ana), `jerpul3` (tasarım), `jerpul5, 12, 8, 9, 7, 6` ve `siklon/toz7` (galeri) | Render görünümlü `jerpul10` ile belirsiz `jerpul1, 2` kullanılmadı; `toz7` siklon değil torbalı filtre olduğu için bu sayfaya alındı |
| Siklon Ayırıcılar | `siklon/siklon2` (ana), `siklon/toz9` (tasarım) | `toz3` (fan, fotoğrafçı imzalı), `toz2, toz4, toz5` (siklon olduğu doğrulanamadı) ve kesit çizimi `siklon1` kullanılmadı |
| Baca Yıkama (Scrubber) Sistemleri | — | Projede scrubber fotoğrafı yok |

## 9. Proje içindeki görseller (Paketleme ve Dolum sayfaları)

Projede sahiplik veya lisans kaydı yoktur; doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Açık Ağız Torbalama | `paketleme/paket1` (ana) | Önceki sayfada big-bag dolum çerçevesi (`paket4`) gösteriliyordu |
| Big Bag Dolum | `big bag/bigdol3` (ana), `bigdol4` (tasarım), `bigdol1, 2, 6, 7, 9, 10, 12, 11` ve `paketleme/paket4` (galeri) | `bigbos*` görselleri big-bag BOŞALTMA istasyonu olduğu için kullanılmadı; `bigdol5` `bigdol1` ile benzer olduğu için alınmadı |
| Paletleme Hatları | — | Projede paletleme fotoğrafı yok; önceki sayfada torbalama makinesi (`paket1`) gösteriliyordu |
| Sıvı Dolum Şişeleme | `sivi dolum/sividol1` (ana), `reaktor-tank/sivi22` (uygulama kartı) | Önceki sayfada etiketleme makinesi (`sividol2`) gösteriliyordu |
| Şişe Etiketleme Makinası | `sivi dolum/sividol2` (ana), `sivi dolum/sividol1` (uygulama kartı) | `sividol2` stüdyo ürün fotoğrafı görünümlü; önceki sayfada big-bag görseli (`paket4`) gösteriliyordu |

## 10. Proje içindeki görseller (Depolama ve Besleme sayfaları)

Projede sahiplik veya lisans kaydı yoktur; doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Silo Sistemleri | `silo/silo1` (ana), `silo14` (tasarım), `silo2, 3, 4, 10, 13, 15, 16, 8` (galeri) | `silo5` `silo1` ile aynı olduğu için; `silo6, 7, 9, 11, 12, 17` galeri yoğunluğu nedeniyle kullanılmadı |
| Bunker ve Hazneler | `bunker/bunker2` (ana), `bunker12` (tasarım), `bunker1` (uygulama kartı) | Ürünün daha önce kendi görseli yoktu (kategori hero'su gösteriliyordu) |
| Teremi Bunkeri | `bunker/bunker10` (ana), `bunker6` (tasarım), `bunker11, 9` (uygulama kartları), `bunker5, 7, 8, 4` (galeri) | Görseller kamyondan ızgaralı alım ağzına boşaltmayı gösteriyor; bir kısmı stok fotoğraf görünümlü |

## 11. Proje içindeki görseller (Yardımcı Ekipmanlar ve Akış Sistemleri sayfaları)

Projede sahiplik veya lisans kaydı yoktur; bir kısmı başka üretici veya stok fotoğraf görünümlüdür, doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Yükleme Körüğü | `silobas/silbas9` (ana), `silbas13` (tasarım), `silbas11, 1, 6, 14, 8` (galeri), `silbas2, 10` (uygulama kartları) | `silbas7` `silbas1` ile aynı; `silbas15` (broşür görünümlü) ve `silbas16` (liman, gemi yüklemesi doğrulanamadı) kullanılmadı; `silbas2–5` araç görselidir, ürün değildir |
| Distribütör | `distrubutor/dist1` (ana), `dist9` (tasarım), `dist5, 7, 2, 4` (galeri), `dist6, 3` (uygulama kartları) | `dist8` `dist1` ile aynı |
| Klapeler | `klape/klap1` (ana), `klap12` (tasarım), `klap10, 2, 5, 11, 4, 9, 3, 8` (galeri), `klap6, 7` (uygulama kartları) | Tümü iki yollu kanatlı yönlendirme klapesi |
| Sürgülü Kapaklar | `surgu kapak/surgu7` (ana), `surgu3` (tasarım), `surgu1, 9, 11, 8, 10` (galeri), `surgu5, 4, 2` (uygulama kartları) | `surgu6` `surgu5` ile aynı |
| Hava Kilidi | `hava kilidi/havakil1` (ana), `havakil2` (tasarım) | Uygulama kartlarında Toz Toplama sayfalarının `siklon/siklon2` ve `jet pulse/jerpul4` görselleri |
| Blower | `blower/blower1` (ana) | Projede tek ürün görseli; tasarım görseli ve galeri yok. `silobas/silbas4` uygulama kartında |

## 12. Proje içindeki görseller (Dozajlama Sistemleri sayfaları)

Projede sahiplik veya lisans kaydı yoktur; bir kısmı çizim (render) veya başka üretici görseli görünümlüdür, doğrulanması önerilir.

| Ürün | Kullanılan dosyalar | Not |
|---|---|---|
| Mikro Dozajlama | `dozaj mikro/mikro3` (ana), `mikro1` (tasarım), `mikro2` (galeri) | Bunker altı dozaj helezonları ve tartım haznesi görülür |
| Makro Dozajlama | `dozaj makro/makro1` (ana) | Projedeki tek görsel bir çizimdir; gerçek fotoğraf yok |
| Dozaj Bant Kantarı | `dozaj konveyor/dozaj4` (ana), `dozaj3` (tasarım, çizim) | `dozaj1` ve `dozaj2` standart konveyör görünümünde olduğu için kullanılmadı; görsellerde load-cell görünmez |
