import Link from "next/link";
import type { BlogTechnicalArticleData } from "../lib/blog-technical-article-data";
import { trText } from "../lib/tr-text";

export function BlogTechnicalArticleBlocks({
  data,
}: {
  data: BlogTechnicalArticleData;
}) {
  return (
    <>
      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {trText(data.requiredDataTitle)}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {trText(data.requiredDataDescription)}
          </p>
        </div>
        <div className="mt-8 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
          <table className="w-full table-fixed border-collapse bg-white text-left">
            <thead className="bg-slate-50">
              <tr className="text-sm font-semibold text-slate-950">
                <th className="w-[22%] px-4 py-4">Veri</th>
                <th className="w-[43%] px-4 py-4">Ne İçin Kullanılır?</th>
                <th className="w-[35%] px-4 py-4">Müşteriden İstenen Bilgi</th>
              </tr>
            </thead>
            <tbody>
              {data.requiredDataRows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-slate-950">
                    {trText(row.label)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.purpose)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.request)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:hidden">
          {data.requiredDataRows.map((row) => (
            <div
              key={row.label}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{trText(row.label)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Ne için:</span>{" "}
                {trText(row.purpose)}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Gerekli bilgi:</span>{" "}
                {trText(row.request)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {trText(data.exampleTitle)}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {trText(data.exampleDescription)}
          </p>
        </div>
        <div className="mt-8 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
          <table className="w-full table-fixed border-collapse bg-white text-left">
            <thead className="bg-slate-50">
              <tr className="text-sm font-semibold text-slate-950">
                <th className="w-[28%] px-4 py-4">Parametre</th>
                <th className="w-[22%] px-4 py-4">Değer</th>
                <th className="w-[50%] px-4 py-4">Yorum</th>
              </tr>
            </thead>
            <tbody>
              {data.exampleRows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-slate-950">
                    {trText(row.label)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.value)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.comment)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:hidden">
          {data.exampleRows.map((row) => (
            <div
              key={row.label}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{trText(row.label)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Değer:</span>{" "}
                {trText(row.value)}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Yorum:</span>{" "}
                {trText(row.comment)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {trText(data.decisionTableTitle)}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {trText(data.decisionTableDescription)}
          </p>
        </div>
        <div className="mt-8 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
          <table className="w-full table-fixed border-collapse bg-white text-left">
            <thead className="bg-slate-50">
              <tr className="text-sm font-semibold text-slate-950">
                <th className="w-[19%] px-4 py-4">Kriter</th>
                <th className="w-[25%] px-4 py-4">Açıklama</th>
                <th className="w-[27%] px-4 py-4">Mühendislik Önemi</th>
                <th className="w-[29%] px-4 py-4">Sahadaki Etki</th>
              </tr>
            </thead>
            <tbody>
              {data.decisionTableRows.map((row) => (
                <tr key={row.criterion} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-slate-950">
                    {trText(row.criterion)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.description)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.importance)}
                  </td>
                  <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                    {trText(row.effect)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:hidden">
          {data.decisionTableRows.map((row) => (
            <div
              key={row.criterion}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {trText(row.criterion)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Açıklama:</span>{" "}
                {trText(row.description)}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Önemi:</span>{" "}
                {trText(row.importance)}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-950">Sahadaki etki:</span>{" "}
                {trText(row.effect)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {trText(data.factorCardsTitle)}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {trText(data.factorCardsDescription)}
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.factorCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{trText(card.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {trText(card.description)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            {trText(data.relatedLinksTitle)}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {trText(data.relatedLinksDescription)}
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {trText(link.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {trText(link.description)}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                İçeriği İncele
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
