// Standart sıcak hadde profil ağırlıkları (kg/m) — EN/DIN katalog değerleri.
// Yeni seri veya ölçü eklemek için ilgili diziye { size, kgm } satırı eklemek yeterlidir.

export type ProfileSize = {
  /** Görünen ölçü adı: "IPE 200" içindeki 200 */
  size: number;
  /** kg/m */
  kgm: number;
};

export type ProfileSeries = {
  id: string;
  label: string;
  sizes: ProfileSize[];
};

export const profileSeries: ProfileSeries[] = [
  {
    id: "IPE",
    label: "IPE",
    sizes: [
      { size: 80, kgm: 6.0 }, { size: 100, kgm: 8.1 }, { size: 120, kgm: 10.4 },
      { size: 140, kgm: 12.9 }, { size: 160, kgm: 15.8 }, { size: 180, kgm: 18.8 },
      { size: 200, kgm: 22.4 }, { size: 220, kgm: 26.2 }, { size: 240, kgm: 30.7 },
      { size: 270, kgm: 36.1 }, { size: 300, kgm: 42.2 }, { size: 330, kgm: 49.1 },
      { size: 360, kgm: 57.1 }, { size: 400, kgm: 66.3 }, { size: 450, kgm: 77.6 },
      { size: 500, kgm: 90.7 }, { size: 550, kgm: 106 }, { size: 600, kgm: 122 },
    ],
  },
  {
    id: "IPEA",
    label: "IPE A",
    sizes: [
      { size: 80, kgm: 5.0 }, { size: 100, kgm: 6.9 }, { size: 120, kgm: 8.7 },
      { size: 140, kgm: 10.5 }, { size: 160, kgm: 12.7 }, { size: 180, kgm: 15.4 },
      { size: 200, kgm: 18.4 }, { size: 220, kgm: 22.2 }, { size: 240, kgm: 26.2 },
      { size: 270, kgm: 30.7 }, { size: 300, kgm: 36.5 }, { size: 330, kgm: 43.0 },
      { size: 360, kgm: 50.2 }, { size: 400, kgm: 57.4 }, { size: 450, kgm: 67.2 },
      { size: 500, kgm: 79.4 }, { size: 550, kgm: 92.1 }, { size: 600, kgm: 108 },
    ],
  },
  {
    id: "IPEO",
    label: "IPE O",
    sizes: [
      { size: 180, kgm: 21.3 }, { size: 200, kgm: 25.1 }, { size: 220, kgm: 29.4 },
      { size: 240, kgm: 34.3 }, { size: 270, kgm: 42.3 }, { size: 300, kgm: 49.3 },
      { size: 330, kgm: 57.0 }, { size: 360, kgm: 66.0 }, { size: 400, kgm: 75.7 },
      { size: 450, kgm: 92.4 }, { size: 500, kgm: 107 }, { size: 550, kgm: 123 },
      { size: 600, kgm: 154 },
    ],
  },
  {
    id: "IPN",
    label: "NPI / IPN",
    sizes: [
      { size: 80, kgm: 5.94 }, { size: 100, kgm: 8.34 }, { size: 120, kgm: 11.1 },
      { size: 140, kgm: 14.3 }, { size: 160, kgm: 17.9 }, { size: 180, kgm: 21.9 },
      { size: 200, kgm: 26.2 }, { size: 220, kgm: 31.1 }, { size: 240, kgm: 36.2 },
      { size: 260, kgm: 41.9 }, { size: 280, kgm: 47.9 }, { size: 300, kgm: 54.2 },
      { size: 320, kgm: 61.0 }, { size: 340, kgm: 68.0 }, { size: 360, kgm: 76.1 },
      { size: 380, kgm: 84.0 }, { size: 400, kgm: 92.4 }, { size: 450, kgm: 115 },
      { size: 500, kgm: 141 }, { size: 550, kgm: 166 }, { size: 600, kgm: 199 },
    ],
  },
  {
    id: "HEA",
    label: "HEA",
    sizes: [
      { size: 100, kgm: 16.7 }, { size: 120, kgm: 19.9 }, { size: 140, kgm: 24.7 },
      { size: 160, kgm: 30.4 }, { size: 180, kgm: 35.5 }, { size: 200, kgm: 42.3 },
      { size: 220, kgm: 50.5 }, { size: 240, kgm: 60.3 }, { size: 260, kgm: 68.2 },
      { size: 280, kgm: 76.4 }, { size: 300, kgm: 88.3 }, { size: 320, kgm: 97.6 },
      { size: 340, kgm: 105 }, { size: 360, kgm: 112 }, { size: 400, kgm: 125 },
      { size: 450, kgm: 140 }, { size: 500, kgm: 155 }, { size: 550, kgm: 166 },
      { size: 600, kgm: 178 }, { size: 650, kgm: 190 }, { size: 700, kgm: 204 },
      { size: 800, kgm: 224 }, { size: 900, kgm: 252 }, { size: 1000, kgm: 272 },
    ],
  },
  {
    id: "HEB",
    label: "HEB",
    sizes: [
      { size: 100, kgm: 20.4 }, { size: 120, kgm: 26.7 }, { size: 140, kgm: 33.7 },
      { size: 160, kgm: 42.6 }, { size: 180, kgm: 51.2 }, { size: 200, kgm: 61.3 },
      { size: 220, kgm: 71.5 }, { size: 240, kgm: 83.2 }, { size: 260, kgm: 93.0 },
      { size: 280, kgm: 103 }, { size: 300, kgm: 117 }, { size: 320, kgm: 127 },
      { size: 340, kgm: 134 }, { size: 360, kgm: 142 }, { size: 400, kgm: 155 },
      { size: 450, kgm: 171 }, { size: 500, kgm: 187 }, { size: 550, kgm: 199 },
      { size: 600, kgm: 212 }, { size: 650, kgm: 225 }, { size: 700, kgm: 241 },
      { size: 800, kgm: 262 }, { size: 900, kgm: 291 }, { size: 1000, kgm: 314 },
    ],
  },
  {
    id: "HEM",
    label: "HEM",
    sizes: [
      { size: 100, kgm: 41.8 }, { size: 120, kgm: 52.1 }, { size: 140, kgm: 63.2 },
      { size: 160, kgm: 76.2 }, { size: 180, kgm: 88.9 }, { size: 200, kgm: 103 },
      { size: 220, kgm: 117 }, { size: 240, kgm: 157 }, { size: 260, kgm: 172 },
      { size: 280, kgm: 189 }, { size: 300, kgm: 238 }, { size: 320, kgm: 245 },
      { size: 340, kgm: 248 }, { size: 360, kgm: 250 }, { size: 400, kgm: 256 },
      { size: 450, kgm: 263 }, { size: 500, kgm: 270 }, { size: 550, kgm: 278 },
      { size: 600, kgm: 285 }, { size: 650, kgm: 293 }, { size: 700, kgm: 301 },
      { size: 800, kgm: 317 }, { size: 900, kgm: 333 }, { size: 1000, kgm: 349 },
    ],
  },
  {
    id: "UPN",
    label: "NPU / UPN",
    sizes: [
      { size: 50, kgm: 5.59 }, { size: 65, kgm: 7.09 }, { size: 80, kgm: 8.64 },
      { size: 100, kgm: 10.6 }, { size: 120, kgm: 13.4 }, { size: 140, kgm: 16.0 },
      { size: 160, kgm: 18.8 }, { size: 180, kgm: 22.0 }, { size: 200, kgm: 25.3 },
      { size: 220, kgm: 29.4 }, { size: 240, kgm: 33.2 }, { size: 260, kgm: 37.9 },
      { size: 280, kgm: 41.8 }, { size: 300, kgm: 46.2 }, { size: 320, kgm: 59.5 },
      { size: 350, kgm: 60.6 }, { size: 380, kgm: 63.1 }, { size: 400, kgm: 71.8 },
    ],
  },
  {
    id: "UPE",
    label: "UPE",
    sizes: [
      { size: 80, kgm: 7.9 }, { size: 100, kgm: 9.82 }, { size: 120, kgm: 12.1 },
      { size: 140, kgm: 14.5 }, { size: 160, kgm: 17.0 }, { size: 180, kgm: 19.7 },
      { size: 200, kgm: 22.8 }, { size: 220, kgm: 26.6 }, { size: 240, kgm: 30.2 },
      { size: 270, kgm: 35.2 }, { size: 300, kgm: 44.4 }, { size: 330, kgm: 53.2 },
      { size: 360, kgm: 61.2 }, { size: 400, kgm: 72.2 },
    ],
  },
];

export function getSeries(id: string): ProfileSeries | undefined {
  return profileSeries.find((series) => series.id === id);
}

export function getKgm(seriesId: string, size: number): number | undefined {
  return getSeries(seriesId)?.sizes.find((item) => item.size === size)?.kgm;
}
