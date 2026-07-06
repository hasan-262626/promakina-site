import { ProgramCtaSection } from "../components/program-cta-section";

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ProgramCtaSection />
    </>
  );
}
