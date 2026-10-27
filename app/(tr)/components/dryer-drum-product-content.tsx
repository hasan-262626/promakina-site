import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { DryerDrumGallery } from "./dryer-drum-gallery";
import type { DrumFlowSpec, DryerDiagramLabels, DryerLink, DryerNodeLabel, DryerEvidence, DryerPageContent, DryerTechnical } from "./dryer-drum-types";

const sectionClass = "scroll-mt-[210px] xl:scroll-mt-[220px]";
const arrowClass = "inline-block rtl:-scale-x-100";

function SectionHeading({ index, eyebrow, title, intro }: { index?: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#278DC0]">
        {index ? (
          <>
            <span className="font-mono text-[#154764]">{index}</span>
            <span aria-hidden="true" className="h-px w-8 bg-[#278DC0]/50" />
          </>
        ) : null}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-950 sm:text-[2.1rem]">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-base leading-8 text-slate-600">{intro}</p> : null}
    </div>
  );
}

function FlowNode({ x, y, w, marker, label, tone }: { x: number; y: number; w: number; marker: string; label: DryerNodeLabel; tone: "product" | "gas" }) {
  const color = tone === "product" ? "#278DC0" : "#D9782D";
  return (
    <g>
      <rect x={x} y={y} width={w} height={84} rx={16} fill="#ffffff" stroke={color} strokeOpacity={0.45} strokeWidth={1.5} />
      <circle cx={x + 24} cy={y + 26} r={12} fill={color} />
      <text x={x + 24} y={y + 30.5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">
        {marker}
      </text>
      <text x={x + 44} y={y + 31} fontSize={13.5} fontWeight={700} fill="#0f172a">
        {label.title}
      </text>
      <text x={x + 16} y={y + 62} fontSize={12} fill="#475569">
        {label.sub}
      </text>
    </g>
  );
}

function ProcessDiagram({ labels }: { labels: DryerDiagramLabels }) {
  const product = "#278DC0";
  const gas = "#D9782D";
  // Uzun çeviri başlıkları tambur halkalarına taşmasın diye küçültülür (TR başlığı 15 karakter).
  const drumTitleSize = labels.drum.title.length > 15 ? 13 : 15;

  return (
    <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f9_100%)] p-3 sm:p-5">
      {/* Akış soldan sağa çizilir; RTL sayfalarda da şema geometrisi korunur. */}
      <svg viewBox="0 0 960 360" role="img" aria-labelledby="dryer-flow-title dryer-flow-desc" className="h-auto w-full min-w-[720px]" direction="ltr">
        <title id="dryer-flow-title">{labels.svgTitle}</title>
        <desc id="dryer-flow-desc">{labels.svgDesc}</desc>
        <defs>
          <marker id="arrow-product" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={product} />
          </marker>
          <marker id="arrow-gas" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={gas} />
          </marker>
          <linearGradient id="drum-shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbe7ef" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9fb4c3" />
          </linearGradient>
        </defs>

        <text x={16} y={28} fontSize={11} fontWeight={700} letterSpacing={2} fill={product}>{labels.productLane}</text>
        <text x={16} y={222} fontSize={11} fontWeight={700} letterSpacing={2} fill={gas}>{labels.gasLane}</text>

        <FlowNode x={16} y={48} w={176} marker="1" label={labels.feed} tone="product" />

        <g>
          <rect x={244} y={44} width={300} height={92} rx={22} fill="url(#drum-shell)" stroke="#154764" strokeWidth={1.5} />
          <rect x={288} y={38} width={12} height={104} rx={4} fill="#154764" />
          <rect x={500} y={38} width={12} height={104} rx={4} fill="#154764" />
          <circle cx={268} cy={90} r={12} fill={product} />
          <text x={268} y={94.5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">2</text>
          <text x={394} y={86} textAnchor="middle" fontSize={drumTitleSize} fontWeight={700} fill="#0f172a">{labels.drum.title}</text>
          <text x={394} y={106} textAnchor="middle" fontSize={12} fill="#334155">{labels.drum.sub}</text>
        </g>

        <FlowNode x={590} y={48} w={150} marker="3" label={labels.outlet} tone="product" />
        <FlowNode x={764} y={48} w={180} marker="4" label={labels.finishing} tone="product" />

        <line x1={192} y1={90} x2={240} y2={90} stroke={product} strokeWidth={2.5} markerEnd="url(#arrow-product)" />
        <line x1={544} y1={90} x2={586} y2={90} stroke={product} strokeWidth={2.5} markerEnd="url(#arrow-product)" />
        <line x1={740} y1={90} x2={760} y2={90} stroke={product} strokeWidth={2.5} markerEnd="url(#arrow-product)" />

        <FlowNode x={16} y={244} w={176} marker="A" label={labels.hotGas} tone="gas" />
        <FlowNode x={440} y={244} w={140} marker="B" label={labels.cyclone} tone="gas" />
        <FlowNode x={604} y={244} w={170} marker="C" label={labels.filter} tone="gas" />
        <FlowNode x={798} y={244} w={146} marker="D" label={labels.fan} tone="gas" />

        <path d="M172 244 V178 H280 V142" fill="none" stroke={gas} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#arrow-gas)" />
        <path d="M510 138 V240" fill="none" stroke={gas} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#arrow-gas)" />
        <line x1={580} y1={286} x2={600} y2={286} stroke={gas} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#arrow-gas)" />
        <line x1={774} y1={286} x2={794} y2={286} stroke={gas} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#arrow-gas)" />

        <text x={290} y={170} fontSize={11.5} fill="#9a4d12">{labels.gasIn}</text>
        <text x={520} y={200} fontSize={11.5} fill="#9a4d12">{labels.exhaust}</text>
      </svg>
    </div>
  );
}

const auxToneColor = { heat: "#D9782D", air: "#2A9D8F", liquid: "#7C5CD6" } as const;

/** Metni kutu genişliğine sığdıracak yazı boyutu (Kiril ve Latin için ortalama karakter genişliği oranıyla). */
function fitSize(text: string, width: number, base: number, ratio: number, min: number) {
  return Math.max(min, Math.min(base, width / (text.length * ratio)));
}

function GenericNode({ x, y, w, marker, label, color }: { x: number; y: number; w: number; marker: string; label: DryerNodeLabel; color: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={84} rx={16} fill="#ffffff" stroke={color} strokeOpacity={0.45} strokeWidth={1.5} />
      <circle cx={x + 24} cy={y + 26} r={12} fill={color} />
      <text x={x + 24} y={y + 30.5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">
        {marker}
      </text>
      <text x={x + 44} y={y + 31} fontSize={fitSize(label.title, w - 54, 13.5, 0.66, 9.5)} fontWeight={700} fill="#0f172a">
        {label.title}
      </text>
      <text x={x + 16} y={y + 62} fontSize={fitSize(label.sub, w - 28, 12, 0.6, 9)} fill="#475569">
        {label.sub}
      </text>
    </g>
  );
}

/** Kurutma dışındaki tambur ürünleri için genel akış şeması (aynı görsel dil). */
function GenericFlowDiagram({ flow }: { flow: DrumFlowSpec }) {
  const product = "#278DC0";
  const aux = flow.aux;
  const auxColor = aux ? auxToneColor[aux.tone] : product;
  const items = [...flow.before, flow.drum, ...flow.after];
  const drumIndex = flow.before.length;
  const drumW = 300;
  const gap = 32;
  const nodeW = items.length > 1 ? Math.min(220, (928 - drumW - gap * (items.length - 1)) / (items.length - 1)) : 0;
  const totalW = drumW + (items.length - 1) * (nodeW + gap);
  let cursor = 16 + (928 - totalW) / 2;
  const positions = items.map((_, index) => {
    const w = index === drumIndex ? drumW : nodeW;
    const x = cursor;
    cursor += w + gap;
    return { x, w };
  });
  const drumX = positions[drumIndex].x;
  const height = aux ? 360 : 150;
  const auxW = 170;
  const auxGap = 30;
  const inputs = aux?.inputs ?? [];
  const outputs = aux?.outputs ?? [];
  const inputXs = inputs.map((_, index) => 16 + index * (auxW + auxGap));
  const outputXs = outputs.map((_, index) => 944 - (outputs.length - index) * auxW - (outputs.length - 1 - index) * auxGap);
  const auxMarkers = "ABCDEF";
  // Başlık ve alt metin halkalar arasındaki alana (drumW - 124) sığacak şekilde küçültülür.
  const drumInner = flow.shape === "box" ? drumW - 70 : drumW - 124;
  const drumTitleSize = Math.min(15, drumInner / (flow.drum.title.length * 0.8));
  const drumSubSize = Math.min(12, drumInner / (flow.drum.sub.length * 0.6));
  // Tek/kısa giriş şeridinde bağlantı yandan çizilir; şerit etiketinin üzerinden geçmez.
  const lastInputRight = inputXs.length ? inputXs[inputXs.length - 1] + auxW : 0;
  const sideEntry = inputXs.length > 0 && lastInputRight + 40 < drumX + 70;

  return (
    <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f9_100%)] p-3 sm:p-5">
      <svg viewBox={`0 0 960 ${height}`} role="img" aria-labelledby="drum-flow-title drum-flow-desc" className="h-auto w-full min-w-[720px]" direction="ltr">
        <title id="drum-flow-title">{flow.svgTitle}</title>
        <desc id="drum-flow-desc">{flow.svgDesc}</desc>
        <defs>
          <marker id="flow-arrow-product" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={product} />
          </marker>
          <marker id="flow-arrow-aux" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={auxColor} />
          </marker>
          <linearGradient id="flow-drum-shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbe7ef" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9fb4c3" />
          </linearGradient>
        </defs>

        <text x={16} y={28} fontSize={11} fontWeight={700} letterSpacing={2} fill={product}>{flow.mainLane}</text>

        {items.map((item, index) => {
          const { x, w } = positions[index];
          if (index === drumIndex) {
            return (
              <g key="drum">
                <rect x={x} y={44} width={w} height={92} rx={22} fill="url(#flow-drum-shell)" stroke="#154764" strokeWidth={1.5} />
                {flow.shape === "box" ? null : (
                  <>
                    <rect x={x + 44} y={38} width={12} height={104} rx={4} fill="#154764" />
                    <rect x={x + w - 56} y={38} width={12} height={104} rx={4} fill="#154764" />
                  </>
                )}
                <circle cx={x + 24} cy={90} r={12} fill={product} />
                <text x={x + 24} y={94.5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">{index + 1}</text>
                <text x={x + w / 2 + 6} y={86} textAnchor="middle" fontSize={drumTitleSize} fontWeight={700} fill="#0f172a">{item.title}</text>
                <text x={x + w / 2 + 6} y={106} textAnchor="middle" fontSize={drumSubSize} fill="#334155">{item.sub}</text>
              </g>
            );
          }
          return <GenericNode key={item.title} x={x} y={48} w={w} marker={String(index + 1)} label={item} color={product} />;
        })}
        {positions.slice(0, -1).map((position, index) => (
          <line key={`main-${index}`} x1={position.x + position.w} y1={90} x2={positions[index + 1].x - 4} y2={90} stroke={product} strokeWidth={2.5} markerEnd="url(#flow-arrow-product)" />
        ))}

        {aux ? (
          <>
            <text x={16} y={222} fontSize={11} fontWeight={700} letterSpacing={2} fill={auxColor}>{aux.lane}</text>
            {inputs.map((node, index) => (
              <GenericNode key={`in-${node.title}`} x={inputXs[index]} y={244} w={auxW} marker={auxMarkers[index]} label={node} color={auxColor} />
            ))}
            {outputs.map((node, index) => (
              <GenericNode key={`out-${node.title}`} x={outputXs[index]} y={244} w={auxW} marker={auxMarkers[inputs.length + index]} label={node} color={auxColor} />
            ))}
            {inputXs.slice(0, -1).map((x, index) => (
              <line key={`in-link-${index}`} x1={x + auxW} y1={286} x2={inputXs[index + 1] - 4} y2={286} stroke={auxColor} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#flow-arrow-aux)" />
            ))}
            {outputXs.slice(0, -1).map((x, index) => (
              <line key={`out-link-${index}`} x1={x + auxW} y1={286} x2={outputXs[index + 1] - 4} y2={286} stroke={auxColor} strokeWidth={2.5} strokeDasharray="7 5" markerEnd="url(#flow-arrow-aux)" />
            ))}
            {inputs.length ? (
              <path
                d={
                  sideEntry
                    ? `M${lastInputRight} 286 H${drumX + 70} V142`
                    : `M${inputXs[inputs.length - 1] + auxW / 2} 244 V178 H${drumX + 70} V142`
                }
                fill="none"
                stroke={auxColor}
                strokeWidth={2.5}
                strokeDasharray="7 5"
                markerEnd="url(#flow-arrow-aux)"
              />
            ) : null}
            {outputs.length ? (
              <path
                d={`M${drumX + drumW - 70} 138 V205 H${outputXs[0] + auxW / 2} V240`}
                fill="none"
                stroke={auxColor}
                strokeWidth={2.5}
                strokeDasharray="7 5"
                markerEnd="url(#flow-arrow-aux)"
              />
            ) : null}
            {aux.inLabel ? <text x={drumX + 80} y={170} fontSize={11.5} fill="#475569">{aux.inLabel}</text> : null}
            {aux.outLabel ? <text x={drumX + drumW - 60} y={196} fontSize={11.5} fill="#475569">{aux.outLabel}</text> : null}
          </>
        ) : null}
      </svg>
    </div>
  );
}

function FlowSteps({ label, markers, steps, tone }: { label: string; markers: string[]; steps: { title: string; text: string }[]; tone: "product" | "gas" }) {
  const badge = tone === "product" ? "bg-[#278DC0]" : "bg-[#D9782D]";
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{label}</h3>
      <ol className="mt-4 space-y-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-3.5">
            <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${badge}`}>
              {markers[index]}
            </span>
            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
              <strong className="font-semibold text-slate-950">{step.title}:</strong>{" "}
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ActionLink({ href, children, variant = "light", external = false }: { href: string; children: ReactNode; variant?: "primary" | "light" | "ghost"; external?: boolean }) {
  const styles = {
    primary: "bg-[#278DC0] text-white hover:bg-[#3aa3d6]",
    light: "bg-white text-[#0b2233] hover:bg-sky-50",
    ghost: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  }[variant];

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

function ChipLinks({ label, links }: { label: string; links: DryerLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="me-1 text-sm font-semibold text-slate-700">{label}</span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex min-h-[38px] items-center rounded-full border border-slate-200 bg-slate-50 px-4 text-[13px] font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

/** Boş metinli satır/öğeler çizilmez (çevirisi kısmen girilmiş içerik). */
const filled = (value: string) => value.trim().length > 0;

function TechnicalSection({ index, technical }: { index: string; technical: DryerTechnical }) {
  const rows = technical.table.rows.filter((row) => filled(row.name) && filled(row.value));
  const sections = technical.sections
    .map((section) => ({ ...section, paragraphs: section.paragraphs.filter(filled) }))
    .filter((section) => filled(section.title) && section.paragraphs.length);
  const { scope } = technical;
  const coreItems = scope.coreItems.filter(filled);
  const optionalItems = scope.optionalItems.filter(filled);

  return (
    <section id="teknik-ozellikler" className={sectionClass}>
      <SectionHeading index={index} eyebrow={technical.eyebrow} title={technical.title} intro={technical.intro || undefined} />

      {rows.length ? (
        <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
          <h3 className="border-b border-slate-200 bg-slate-50 px-5 py-4 text-lg font-semibold text-[#0b2233] sm:px-6">{technical.table.title}</h3>
          {/* Mobilde etiket ve değer alt alta, geniş ekranda iki sütun (etiket sütunu %30). */}
          <table className="block w-full border-collapse text-start text-sm sm:table sm:table-fixed">
            <caption className="sr-only">{technical.table.title}</caption>
            <colgroup>
              <col className="sm:w-[30%]" />
              <col />
            </colgroup>
            <thead className="sr-only">
              <tr>
                <th scope="col">{technical.table.headers[0]}</th>
                <th scope="col">{technical.table.headers[1]}</th>
              </tr>
            </thead>
            <tbody className="block divide-y divide-slate-100 sm:table-row-group">
              {rows.map((row) => (
                <tr key={row.name} className="block px-5 py-3.5 align-top sm:table-row sm:p-0">
                  <th scope="row" className="block break-words text-start font-semibold text-[#154764] sm:table-cell sm:px-6 sm:py-3.5">
                    {row.name}
                  </th>
                  <td className="mt-1 block break-words leading-6 text-slate-600 sm:mt-0 sm:table-cell sm:px-6 sm:py-3.5">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filled(technical.table.note) ? (
            <p className="border-t border-slate-200 px-5 py-4 text-xs leading-6 text-slate-500 sm:px-6">{technical.table.note}</p>
          ) : null}
        </div>
      ) : null}

      {sections.length ? (
        <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          {sections.map((section, i) => (
            <details key={section.title} open={i === 0} className="group px-5 py-1 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold sm:text-lg">{section.title}</h3>
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-[#154764] transition group-open:rotate-45 group-open:border-[#278DC0]"
                >
                  +
                </span>
              </summary>
              <div className="space-y-4 pb-5 pe-2 text-[15px] leading-7 text-slate-600 sm:pe-10">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      ) : null}

      {filled(scope.title) && (coreItems.length || optionalItems.length) ? (
        <div className="mt-6 rounded-[28px] bg-[#0b2233] p-6 text-white sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{scope.title}</h3>
          {filled(scope.intro) ? <p className="mt-3 text-sm leading-7 text-white/75">{scope.intro}</p> : null}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              { title: scope.coreTitle, items: coreItems, marker: "✓" },
              { title: scope.optionalTitle, items: optionalItems, marker: "+" },
            ]
              .filter((group) => group.items.length)
              .map((group) => (
                <div key={group.title} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="font-semibold leading-6">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/85">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden="true" className="text-[#7cc4e6]">{group.marker}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          {filled(scope.note) ? <p className="mt-5 text-xs leading-6 text-white/55">{scope.note}</p> : null}
        </div>
      ) : null}
    </section>
  );
}

/** Üretici kanıtları: yalnız panelde onaylanmış video, firma bilgileri ve tamamlanmış proje referansları. */
function EvidenceSection({ index, evidence }: { index: string; evidence: DryerEvidence }) {
  return (
    <section id="imalat-ve-referanslar" className={sectionClass}>
      <SectionHeading index={index} eyebrow={evidence.eyebrow} title={evidence.title} intro={evidence.intro || undefined} />
      <div className={`mt-8 grid gap-6 ${evidence.video ? "lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]" : ""}`}>
        {evidence.video ? (
          <figure className="mx-auto w-full max-w-[320px]">
            <video
              controls
              playsInline
              preload="metadata"
              title={evidence.video.title}
              aria-label={evidence.video.title}
              className="aspect-[352/640] w-full rounded-[24px] bg-[#0b2233] object-cover"
            >
              {/* #t=0.5: önizleme karesi olarak videonun ilk aydınlık karesi gösterilir (ayrı poster dosyası gerekmez). */}
              <source src={`${encodeURI(evidence.video.src)}#t=0.5`} type="video/mp4" />
            </video>
            <figcaption className="mt-3 text-sm leading-6 text-slate-600">
              <span className="font-semibold text-[#0b2233]">{evidence.video.title}</span>
              {evidence.video.caption ? <span className="block">{evidence.video.caption}</span> : null}
            </figcaption>
          </figure>
        ) : null}
        <div className="space-y-6">
          {evidence.facts.length ? (
            <dl className="grid gap-px overflow-hidden rounded-[24px] border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {evidence.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`bg-white px-5 py-4 ${evidence.facts.length % 2 === 1 && i === evidence.facts.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#278DC0]">{fact.label}</dt>
                  <dd className="mt-1.5 text-[15px] font-semibold leading-6 text-[#0b2233]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {evidence.references.length ? (
            <ul className="grid gap-4 md:grid-cols-2">
              {evidence.references.map((reference) => (
                <li key={reference.name} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
                  <h3 className="text-base font-semibold leading-snug text-[#0b2233]">{reference.name}</h3>
                  {reference.location || reference.year ? (
                    <p className="mt-1 text-[13px] font-medium text-slate-500">{[reference.location, reference.year].filter(Boolean).join(" · ")}</p>
                  ) : null}
                  <p className="mt-3 text-[14.5px] leading-7 text-slate-600">{reference.scope}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function DryerDrumProductContent({ content }: { content: DryerPageContent }) {
  const { labels, overview, process, applications, design, gallery, faq, resources, cta } = content;
  // Teknik bölüm yalnız başlığı girilmiş dilde çizilir (çevirisi olmayan dilde başka dil gösterilmez).
  const technical = content.technical && filled(content.technical.title) ? content.technical : undefined;
  const { evidence } = content;
  // Ek bölümler sayfa içi menüde "Tasarım ve İmalat" çipinin ardından gelir.
  const extraNav = [
    ...(technical ? [{ id: "teknik-ozellikler", label: technical.navLabel || technical.title }] : []),
    ...(evidence ? [{ id: "imalat-ve-referanslar", label: evidence.navLabel || evidence.title }] : []),
  ];
  const sectionNav = content.sectionNav.flatMap((item) => (item.id === "tasarim-imalat" ? [item, ...extraNav] : [item]));
  let sectionCounter = 0;
  const nextIndex = () => String(++sectionCounter).padStart(2, "0");
  const processIndex = nextIndex();
  const applicationsIndex = nextIndex();
  const designIndex = nextIndex();
  const technicalIndex = technical ? nextIndex() : "";
  const evidenceIndex = evidence ? nextIndex() : "";
  const galleryIndex = gallery ? nextIndex() : "";
  const faqIndex = faq.items.length ? nextIndex() : "";
  const resourcesIndex = resources?.links.length ? nextIndex() : "";
  const hasSecondLine = process.gasLine.length > 0;
  // Kart sayısına göre dengeli ızgara (6 ve 3 kart: 3 sütun, 4 kart: 2x2).
  const applicationGrid =
    applications.items.length === 4 || applications.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3";
  const dataCount = design.dataItems.length;
  const dataGrid =
    dataCount === 5 ? "grid-cols-2 xl:grid-cols-5" : dataCount === 4 ? "grid-cols-2 xl:grid-cols-4" : dataCount === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 xl:grid-cols-3";

  return (
    <div className="min-w-0">
      {/* Görünür breadcrumb; BreadcrumbList şemasıyla aynı adımlar. */}
      <nav aria-label="Breadcrumb" className="mb-4 text-[13px] font-medium text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {content.breadcrumb.items.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link prefetch={false} href={crumb.href} className="transition hover:text-[#278DC0]">
                {crumb.label}
              </Link>
              <span aria-hidden="true">/</span>
            </li>
          ))}
          <li aria-current="page" className="text-slate-700">
            {content.breadcrumb.current}
          </li>
        </ol>
      </nav>

      <nav aria-label={labels.sectionNav} className="mb-6 sm:mb-8">
        <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {sectionNav.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="inline-flex min-h-[38px] items-center rounded-full border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-700 transition hover:border-[#278DC0] hover:text-[#154764]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-16 sm:space-y-20">
        {/* Genel bakış */}
        <section id="genel-bakis" className={sectionClass}>
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[#0b2233] shadow-[0_28px_70px_rgba(11,34,51,0.18)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/8]">
              <Image
                src={overview.image.src}
                alt={overview.image.alt}
                fill
                priority
                sizes="(min-width: 1280px) 940px, (min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2233] via-[#0b2233]/20 to-transparent" />
              <p className="absolute start-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#154764] backdrop-blur sm:start-7 sm:top-7">
                {overview.badge ?? (
                  <>
                    {overview.brand}<span className="hidden sm:inline"> · {overview.tagline}</span>
                  </>
                )}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
              {overview.keyFacts.map((fact) => (
                <div key={fact.label} className="min-w-0 break-words hyphens-auto bg-[#0b2233] px-5 py-5 sm:px-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7cc4e6]">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-6 text-white sm:text-[15px]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
            <div>
              <SectionHeading eyebrow={labels.overviewEyebrow} title={overview.title} />
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                {overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="self-start rounded-[24px] border-s-4 border-[#278DC0] bg-gradient-to-br from-sky-50 to-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#278DC0]">{labels.noteLabel}</p>
              <p className="mt-3 text-base font-medium leading-8 text-slate-800">{overview.note}</p>
            </aside>
          </div>
        </section>

        {/* Proses akışı */}
        <section id="proses-akisi" className={sectionClass}>
          <SectionHeading index={processIndex} eyebrow={labels.processEyebrow} title={process.title} intro={process.intro} />
          <div className="mt-8">
            {process.diagram ? <ProcessDiagram labels={process.diagram} /> : process.flow ? <GenericFlowDiagram flow={process.flow} /> : null}
            <p className="mt-2 text-xs text-slate-500 sm:hidden">{labels.scrollHint}</p>
          </div>
          <div className={`mt-6 grid gap-5 ${hasSecondLine ? "lg:grid-cols-2" : ""}`}>
            <FlowSteps label={labels.productLine} markers={["1", "2", "3", "4", "5", "6"]} steps={process.productLine} tone="product" />
            {hasSecondLine ? (
              <FlowSteps label={labels.gasLine} markers={["A", "B", "C", "D", "E", "F"]} steps={process.gasLine} tone="gas" />
            ) : null}
          </div>
          {process.note ? <p className="mt-4 text-sm leading-7 text-slate-500">{process.note}</p> : null}
        </section>

        {/* Uygulama alanları */}
        <section id="uygulama-alanlari" className={sectionClass}>
          <SectionHeading index={applicationsIndex} eyebrow={labels.applicationsEyebrow} title={applications.title} />
          <div className={`mt-8 grid gap-5 ${applicationGrid}`}>
            {applications.items.map((item, index) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition hover:border-[#278DC0]/45 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute start-4 top-4 rounded-full bg-[#0b2233]/85 px-2.5 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold leading-snug text-[#0b2233]">{item.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-slate-600">{item.text}</p>
                  <Link
                    href={item.link.href}
                    className="mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-[#154764] transition hover:text-[#278DC0]"
                  >
                    {item.link.label}
                    <span aria-hidden="true" className={`${arrowClass} transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1`}>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {applications.sectors.length ? (
            <nav
              aria-label={labels.relatedSectors}
              className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center"
            >
              <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {labels.relatedSectors}
              </span>
              <ul className="flex flex-wrap gap-2">
                {applications.sectors.map((sector) => (
                  <li key={sector.href}>
                    <Link
                      href={sector.href}
                      className="inline-flex min-h-[34px] items-center rounded-full border border-slate-200 px-3.5 text-[13px] font-medium text-[#154764] transition hover:border-[#278DC0] hover:text-[#278DC0]"
                    >
                      {sector.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </section>

        {/* Tasarım ve imalat */}
        <section id="tasarim-imalat" className={sectionClass}>
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <div className={design.figure ? "grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]" : ""}>
              {design.figure ? (
                <div className="relative min-h-[260px] bg-slate-100 sm:min-h-[340px]">
                  <Image src={design.figure.src} alt={design.figure.alt} fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
                </div>
              ) : null}
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <SectionHeading index={designIndex} eyebrow={labels.designEyebrow} title={design.title} />
                <p className="mt-4 text-base leading-8 text-slate-600">{design.intro}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {design.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#0b2233]">
                      <span aria-hidden="true" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#278DC0]/12 text-[11px] text-[#278DC0]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] bg-[#0b2233] p-6 text-white sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{design.dataTitle}</h3>
            <ol className={`mt-6 grid gap-3 ${dataGrid}`}>
              {design.dataItems.map((item, index) => (
                <li
                  key={item.title}
                  className={`min-w-0 break-words hyphens-auto rounded-[20px] border border-white/10 bg-white/[0.04] p-4 sm:p-5 ${dataCount === 5 && index === dataCount - 1 ? "col-span-2 xl:col-span-1" : ""}`}
                >
                  <span className="font-mono text-sm font-semibold text-[#7cc4e6]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-semibold leading-6">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs leading-6 text-white/55">{design.dataNote}</p>
          </div>
        </section>

        {/* Teknik özellikler, mekanik tasarım ve tedarik kapsamı */}
        {technical ? <TechnicalSection index={technicalIndex} technical={technical} /> : null}

        {/* Üretici kanıtları (yalnız panelde onaylanmış içerik) */}
        {evidence ? <EvidenceSection index={evidenceIndex} evidence={evidence} /> : null}

        {/* Galeri */}
        {gallery ? (
          <section id="galeri" className={sectionClass}>
            <SectionHeading index={galleryIndex} eyebrow={labels.galleryEyebrow} title={gallery.title} />
            <div className="mt-8">
              <DryerDrumGallery images={gallery.images} labels={gallery.labels} />
            </div>
          </section>
        ) : null}

        {/* SSS */}
        {faq.items.length ? (
          <section id="sss" className={sectionClass}>
            <SectionHeading index={faqIndex} eyebrow={labels.faqEyebrow} title={faq.title} />
            <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              {faq.items.map((item, index) => (
                <details key={item.question} open={index === 0} className="group px-5 py-1 sm:px-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-semibold">{item.question}</h3>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-[#154764] transition group-open:rotate-45 group-open:border-[#278DC0]"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pe-10 text-[15px] leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {/* Teknik kaynaklar ve ilgili makinalar */}
        {resources?.links.length ? (
          <section id="teknik-kaynaklar" className={sectionClass}>
            <SectionHeading index={resourcesIndex} eyebrow={labels.resourcesEyebrow} title={resources.title} />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {resources.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start justify-between gap-3 rounded-[20px] border border-slate-200 bg-white p-4 transition hover:border-[#278DC0]/40 hover:shadow-[0_14px_36px_rgba(15,23,42,0.07)]"
                >
                  <span>
                    <span className="block text-[15px] font-semibold text-slate-950 transition group-hover:text-[#154764]">{link.label}</span>
                    {link.description ? <span className="mt-1 block text-[13px] leading-6 text-slate-500">{link.description}</span> : null}
                  </span>
                  <span aria-hidden="true" className={`${arrowClass} pt-0.5 text-sm font-semibold text-[#278DC0] transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1`}>
                    →
                  </span>
                </Link>
              ))}
            </div>
            {resources.machines.length ? (
              <div className="mt-8">
                <ChipLinks label={labels.relatedMachines} links={resources.machines} />
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Teklif */}
        <section id="teklif" className={sectionClass}>
          <div className="relative overflow-hidden rounded-[32px] bg-[#0b2233] px-6 py-9 text-white shadow-[0_30px_80px_rgba(11,34,51,0.28)] sm:px-10 sm:py-12">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#278DC0]/25 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7cc4e6]">{labels.ctaEyebrow}</p>
                <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-[2.1rem]">{cta.title}</h2>
                <p className="mt-4 text-base leading-8 text-white/80">{cta.text}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ActionLink href={cta.whatsapp.href} variant="primary" external>
                    {cta.whatsapp.label}
                  </ActionLink>
                  <ActionLink href={cta.mail.href}>{cta.mail.label}</ActionLink>
                  <ActionLink href={cta.phone.href} variant="ghost">
                    <span dir="ltr">{cta.phone.label}</span>
                  </ActionLink>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                  {cta.extraLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-[#7cc4e6] underline-offset-4 hover:underline">
                      {link.label} <span aria-hidden="true" className={arrowClass}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">{cta.requiredTitle}</h3>
                <ul className="mt-4 grid gap-x-5 gap-y-2 text-sm leading-6 text-white/90 sm:grid-cols-2">
                  {cta.requiredItems.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-[#7cc4e6]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {cta.requiredNote ? <p className="mt-4 text-xs leading-6 text-white/60">{cta.requiredNote}</p> : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
