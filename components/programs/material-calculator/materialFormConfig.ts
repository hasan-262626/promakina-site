import type { MaterialCategory, MaterialDef } from "./types";

// Kategori grubu → liste satırındaki "Cinsi" etiketi
export const groupLabels: Record<string, string> = {
  kutu: "KUTU PROFİL",
  boru: "BORU",
  kosebent: "KÖŞEBENT",
  sac: "SAC / LAMA",
  iprofil: "PROFİL",
  uprofil: "PROFİL",
  tprofil: "PROFİL",
  mil: "TRANSMİSYON",
  diger: "DİĞER",
};

const stdProfile = (series: string, label: string, note?: string): MaterialDef => ({
  id: series.toLowerCase(),
  label,
  kind: "stdProfile",
  series,
  note,
});

export const materialCategories: MaterialCategory[] = [
  {
    id: "sac",
    label: "Sac / Lama",
    icon: "sac",
    materials: [
      { id: "yassi-sac", label: "Yassı Sac", kind: "sheet" },
      { id: "silme-lama", label: "Silme / Lama", kind: "lama" },
      { id: "baklava-sac", label: "Baklava Desenli Sac", kind: "patterned", pattern: "baklava" },
      { id: "gozyasi-sac", label: "Gözyaşı Desenli Sac", kind: "patterned", pattern: "gozyasi" },
      { id: "ceta-sac", label: "Çeta Desenli Sac", kind: "patterned", pattern: "ceta" },
      { id: "delikli-sac", label: "Delikli Sac", kind: "perforated" },
    ],
  },
  {
    id: "kutu",
    label: "Kutu Profil",
    icon: "kutu",
    materials: [
      { id: "kare-kutu", label: "Kare Kutu Profil", kind: "squareTube" },
      { id: "dikdortgen-kutu", label: "Dikdörtgen Kutu Profil", kind: "rectTube" },
    ],
  },
  {
    id: "boru",
    label: "Sanayi Borusu",
    icon: "boru",
    materials: [
      { id: "sanayi-borusu", label: "Sanayi Borusu", kind: "pipe" },
      { id: "yuvarlak-boru", label: "Yuvarlak Boru", kind: "pipe" },
    ],
  },
  {
    id: "kosebent",
    label: "Köşebent / L Profil",
    icon: "kosebent",
    materials: [
      { id: "esit-kosebent", label: "Eşit Kenar Köşebent", kind: "equalAngle" },
      { id: "cesit-kosebent", label: "Çeşit Kenar Köşebent", kind: "unequalAngle" },
    ],
  },
  {
    id: "iprofil",
    label: "I / H Profil",
    icon: "iprofil",
    materials: [
      stdProfile("IPN", "NPI / IPN Profil"),
      stdProfile("IPE", "IPE Profil"),
      stdProfile("IPEA", "IPE A Profil"),
      stdProfile("IPEO", "IPE O Profil"),
      stdProfile("HEA", "HEA Profil"),
      stdProfile("HEB", "HEB Profil"),
      stdProfile("HEM", "HEM Profil"),
      { id: "hl-profil", label: "HL Profil", kind: "manualKgM", note: "HL serisi tabloları üretici kataloğuna göre değişir; kg/m değerini girerek hesaplayın." },
      { id: "hd-profil", label: "HD Profil", kind: "manualKgM", note: "HD serisi için katalog kg/m değerini girin." },
      { id: "hp-profil", label: "HP Profil", kind: "manualKgM", note: "HP serisi için katalog kg/m değerini girin." },
    ],
  },
  {
    id: "uprofil",
    label: "U Profil (NPU / UPE)",
    icon: "uprofil",
    materials: [stdProfile("UPN", "NPU / UPN Profil"), stdProfile("UPE", "UPE Profil")],
  },
  {
    id: "tprofil",
    label: "T Demir",
    icon: "tprofil",
    materials: [{ id: "t-profil", label: "T Profil", kind: "tprofile" }],
  },
  {
    id: "mil",
    label: "Transmisyon",
    icon: "mil",
    materials: [
      { id: "yuvarlak-mil", label: "Yuvarlak", kind: "round" },
      { id: "altikose", label: "Altıköşe", kind: "hex" },
    ],
  },
  {
    id: "diger",
    label: "Diğer Çeşitler",
    icon: "diger",
    materials: [
      { id: "manuel-kgm", label: "Manuel kg/m Girişi", kind: "manualKgM" },
      { id: "manuel-kgadet", label: "Manuel kg/adet Girişi", kind: "manualKgAdet" },
      { id: "ozel-profil", label: "Özel Profil (kg/m)", kind: "manualKgM", note: "Katalogdan veya kesit hesabından bulduğunuz kg/m değeriyle hesaplayın." },
    ],
  },
];

export const patternThicknessOptions = ["2/3", "3/4", "4/5", "5/6", "6/7"];

export function findMaterial(categoryId: string, materialId: string): MaterialDef | undefined {
  return materialCategories
    .find((category) => category.id === categoryId)
    ?.materials.find((material) => material.id === materialId);
}
