import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/mdx";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

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
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Work
          </h1>
          <p className="text-text-secondary mb-12 max-w-[600px]">
            Case studies from enterprise AI, side projects, and client work.
            Each one covers the problem, my approach, and what happened.
          </p>
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
  );
}
