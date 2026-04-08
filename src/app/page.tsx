import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/mdx";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

const competencies = [
  {
    title: "Product Strategy",
    description:
      "Defining vision, roadmaps, and OKRs for products from 0-to-1 through growth. Aligning engineering, design, legal, and leadership around shared outcomes.",
  },
  {
    title: "AI Product Development",
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
          <HeroReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              Senior PM building AI-powered products in financial services.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.15}>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[600px]">
              I turn complex problems into shipped products. Currently leading
              enterprise AI product development initiatives at Northwestern Mutual. Previously building data
              platforms, BI tools, and healthcare tech.
            </p>
          </HeroReveal>
        </Container>
      </section>

      {/* Featured Work */}
      <section className="pb-20">
        <Container>
          <FadeIn>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
              Featured Work
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <CaseStudyCard {...study} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* What I Do */}
      <section className="py-20 border-t border-border">
        <Container>
          <FadeIn>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
              What I Do
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((c) => (
              <StaggerItem key={c.title}>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {c.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
