"use client";

import { fmtTr } from "./materialCalculations";
import type { ListItem } from "./types";

type Props = {
  items: ListItem[];
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
  onClear: () => void;
};

const priceTypeLabel = { kg: "₺/kg", m: "₺/m", adet: "₺/adet" } as const;

function buildPrintHtml(items: ListItem[], totals: { kg: number; price: number; qty: number }) {
  const rows = items
    .map(
      (item) => `
      <tr>
        <td>${item.group}</td>
        <td>${item.material}</td>
        <td>${item.gradeLabel}</td>
        <td style="text-align:right">${fmtTr(item.totalKg)} kg</td>
        <td style="text-align:right">${fmtTr(item.unitPrice)} ${priceTypeLabel[item.priceType]}</td>
        <td style="text-align:right">${fmtTr(item.totalPrice)} ₺</td>
        <td style="text-align:center">${item.quantity}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
  <title>PRO MAKİNA Malzeme Ağırlık ve Fiyat Listesi</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;color:#0f172a;margin:32px;}
    h1{font-size:20px;color:#154764;margin:0 0 4px;}
    .date{color:#475569;font-size:12px;margin-bottom:20px;}
    table{width:100%;border-collapse:collapse;font-size:12px;}
    th{background:#154764;color:#fff;text-align:left;padding:8px;}
    td{border-bottom:1px solid #e2e8f0;padding:8px;}
    .totals{margin-top:16px;font-size:14px;}
    .totals strong{color:#154764;}
    .note{margin-top:24px;padding:12px;border:1px solid #e2e8f0;background:#f8fafc;font-size:11px;color:#475569;border-radius:8px;}
  </style></head><body>
  <h1>PRO MAKİNA Malzeme Ağırlık ve Fiyat Listesi</h1>
  <div class="date">Tarih: ${new Date().toLocaleDateString("tr-TR")}</div>
  <table>
    <thead><tr><th>Cinsi</th><th>Malzeme</th><th>Tür</th><th style="text-align:right">Ağırlık</th><th style="text-align:right">Birim Fiyat</th><th style="text-align:right">Toplam</th><th style="text-align:center">Adet</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="totals">
    <div>Toplam Ağırlık: <strong>${fmtTr(totals.kg)} kg</strong></div>
    <div>Toplam Fiyat: <strong>${fmtTr(totals.price)} ₺</strong></div>
    <div>Toplam Adet: <strong>${totals.qty}</strong></div>
  </div>
  <div class="note">Bu hesaplama yaklaşık mühendislik hesabıdır. Nihai imalat, tolerans, fire ve tedarik şartlarına göre değişebilir.</div>
  <script>window.print();</script>
  </body></html>`;
}

export function MaterialListPanel({ items, onRemove, onQuantityChange, onClear }: Props) {
  const totals = items.reduce(
    (acc, item) => ({
      kg: acc.kg + item.totalKg,
      price: acc.price + item.totalPrice,
      qty: acc.qty + item.quantity,
    }),
    { kg: 0, price: 0, qty: 0 },
  );
  const avgKgPrice = totals.kg > 0 ? totals.price / totals.kg : 0;

  const handlePrint = () => {
    const win = window.open("", "_blank", "noopener,width=900,height=700");
    if (!win) return;
    win.document.write(buildPrintHtml(items, totals));
    win.document.close();
  };

  const buildTextRows = () =>
    items
      .map(
        (item) =>
          `${item.group}\t${item.material}\t${item.gradeLabel}\t${fmtTr(item.totalKg)} kg\t${fmtTr(item.totalPrice)} ₺\t${item.quantity} adet`,
      )
      .join("\n");

  const handleCsv = () => {
    const header = "Cinsi;Malzeme;Tür;Ağırlık (kg);Birim Fiyat;Fiyat Tipi;Toplam (₺);Adet";
    const rows = items.map(
      (item) =>
        `${item.group};${item.material};${item.gradeLabel};${item.totalKg.toFixed(2)};${item.unitPrice};${priceTypeLabel[item.priceType]};${item.totalPrice.toFixed(2)};${item.quantity}`,
    );
    const csv = "﻿" + [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pro-makina-malzeme-listesi.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `PRO MAKİNA Malzeme Listesi\n${buildTextRows()}\nToplam: ${fmtTr(totals.kg)} kg / ${fmtTr(totals.price)} ₺`,
      );
    } catch {
      // pano erişimi engellenmiş olabilir
    }
  };

  const handleQuote = () => {
    const summary = encodeURIComponent(
      `Merhaba, Pro Makina malzeme hesaplayıcısıyla liste oluşturdum.\n${items
        .map((item) => `- ${item.material} (${item.gradeLabel}) x${item.quantity} = ${fmtTr(item.totalKg)} kg`)
        .join("\n")}\nToplam: ${fmtTr(totals.kg)} kg. Bu liste için teklif almak istiyorum.`,
    );
    window.open(`https://wa.me/905320580104?text=${summary}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#154764]">
          Malzeme Listesi
        </h3>
        <span className="rounded-full bg-[#eef6fb] px-2.5 py-1 text-xs font-semibold text-[#154764]">
          {items.length} kalem
        </span>
      </div>

      <div className="max-h-[420px] flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-slate-500">
            Henüz malzeme eklenmedi. Hesap yapıp <strong>Listeye Ekle</strong> ile buraya
            aktarın.
          </p>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-slate-50 text-[10px] uppercase tracking-[0.1em] text-slate-500">
              <tr>
                <th className="px-3 py-2">Cinsi / Malzeme</th>
                <th className="px-2 py-2 text-right">Ağırlık</th>
                <th className="px-2 py-2 text-right">Toplam</th>
                <th className="px-2 py-2 text-center">Adet</th>
                <th className="px-2 py-2" />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 align-top">
                  <td className="px-3 py-2.5">
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-[#278DC0]">
                      {item.group}
                    </span>
                    <span className="block font-semibold text-slate-900">{item.material}</span>
                    <span className="block text-[11px] text-slate-500">{item.gradeLabel}</span>
                  </td>
                  <td className="px-2 py-2.5 text-right font-semibold tabular-nums text-slate-800">
                    {fmtTr(item.totalKg)} kg
                  </td>
                  <td className="px-2 py-2.5 text-right font-semibold tabular-nums text-[#154764]">
                    {fmtTr(item.totalPrice)} ₺
                  </td>
                  <td className="px-2 py-2.5 text-center">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(event) => onQuantityChange(item.id, Math.max(1, Number(event.target.value) || 1))}
                      className="h-9 w-14 rounded-lg border border-slate-200 text-center text-sm outline-none focus:border-[#278DC0]"
                    />
                  </td>
                  <td className="px-2 py-2.5">
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      aria-label="Satırı sil"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-red-600 transition hover:bg-red-50"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <span className="text-slate-500">Toplam Ağırlık</span>
          <span className="text-right text-lg font-bold tabular-nums text-[#154764]">
            {fmtTr(totals.kg)} kg
          </span>
          <span className="text-slate-500">Toplam Fiyat</span>
          <span className="text-right text-lg font-bold tabular-nums text-[#154764]">
            {fmtTr(totals.price)} ₺
          </span>
          <span className="text-slate-500">Toplam Adet</span>
          <span className="text-right font-semibold tabular-nums">{totals.qty}</span>
          <span className="text-slate-500">Ortalama kg fiyatı</span>
          <span className="text-right font-semibold tabular-nums">{fmtTr(avgKgPrice)} ₺/kg</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button type="button" onClick={handlePrint} disabled={!items.length} className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#154764] px-4 text-xs font-semibold text-white transition hover:bg-[#278DC0] disabled:opacity-40">
            Yazdır
          </button>
          <button type="button" onClick={handleQuote} disabled={!items.length} className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#278DC0] px-4 text-xs font-semibold text-white transition hover:bg-[#154764] disabled:opacity-40">
            Teklif Listesi Oluştur
          </button>
          <button type="button" onClick={handleCsv} disabled={!items.length} className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 transition hover:border-[#278DC0] disabled:opacity-40">
            CSV İndir
          </button>
          <button type="button" onClick={handleCopy} disabled={!items.length} className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 transition hover:border-[#278DC0] disabled:opacity-40">
            Listeyi Kopyala
          </button>
          <button type="button" onClick={onClear} disabled={!items.length} className="col-span-2 inline-flex min-h-[42px] items-center justify-center rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-40">
            Temizle
          </button>
        </div>
      </div>
    </div>
  );
}
