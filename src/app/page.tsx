import skinConfig from "@/skin.config";

export default function Home() {
  return (
    <section data-nocms-component="homepage-placeholder" className="py-24 px-6 text-center">
      <h1 data-role="heading" className="font-heading text-4xl">{skinConfig.brandName}</h1>
      <p data-role="subheading" className="mt-4 text-lg text-text-muted">Phase 3.1 will rebuild this homepage with real storage components.</p>
    </section>
  );
}
