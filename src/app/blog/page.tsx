import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on product management, AI, and building things.",
};

export default function BlogPage() {
  return (
    <section className="py-16">
      <Container width="narrow">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Blog
        </h1>
        <p className="text-text-secondary mb-12">
          Thoughts on product management, AI, and building things.
        </p>

        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <p className="text-text-secondary mb-1">Coming soon.</p>
          <p className="text-sm text-text-secondary">
            I&apos;m working on posts about AI product development, PM frameworks,
            and lessons from building in fintech.
          </p>
        </div>
      </Container>
    </section>
  );
}
