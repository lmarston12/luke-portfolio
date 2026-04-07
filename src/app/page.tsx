import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/mdx";

const competencies = [
  {
    title: "Product Strategy",
    description:
      "Defining vision, roadmaps, and OKRs for products from 0-to-1 through growth. Aligning engineering, design, legal, and leadership around shared outcomes.",
  },
  {
    title: "AI / ML Product Development",
    description:
      "Building AI-powered products with LLMs, structured data extraction, and prompt engineering. Hands-on experience with Claude API, model evaluation, and adoption strategy.",
  },
  {
    title: "Full-Stack Building",
    description:
      "Shipping real products end-to-end: React, Next.js, Supabase, Edge Functions, Tailwind. Not just speccing — building, deploying, and iterating.",
  },
];

export default function HomePage() {
  const caseStudies = getAllCaseStudies().filter((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Container width="narrow">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Senior PM building AI-powered products in financial services.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[600px]">
            I turn complex problems into shipped products. Currently leading
            enterprise AI at Northwestern Mutual. Previously building data
            platforms, BI tools, and healthcare tech.
          </p>
        </Container>
      </section>

      {/* Featured Work */}
      <section className="pb-20">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </Container>
      </section>

      {/* What I Do */}
      <section className="py-20 border-t border-border">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((c) => (
              <div key={c.title}>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
