import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from enterprise AI platforms, side projects, and client work.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Work
        </h1>
        <p className="text-text-secondary mb-12 max-w-[600px]">
          Case studies from enterprise AI, side projects, and client work.
          Each one covers the problem, my approach, and what happened.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
