import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Product Manager in NYC building AI-powered products in financial services.",
};

const career = [
  {
    date: "2024 - Present",
    title: "Senior Product Manager",
    company: "Northwestern Mutual",
    description:
      "Leading 0-to-1 development of an enterprise AI platform that automates advisor workflows through Zoom integrations, AI-generated meeting notes, and structured data extraction. Drove adoption to 73% of eligible advisors within 6 months.",
  },
  {
    date: "2022 - 2024",
    title: "Product Manager III",
    company: "Northwestern Mutual",
    description:
      "Led B2B2C product experiences in financial planning. Grew advisor tool usage from 24% to 52% through user research, experimentation, and cross-functional alignment.",
  },
  {
    date: "2021 - 2022",
    title: "Product Manager, Data",
    company: "EXL Service",
    description:
      "Built cloud-based data integration products and BI dashboards for financial services clients. Reduced data ingestion time by 15% across multiple ERP systems.",
  },
  {
    date: "2020 - 2021",
    title: "Product Analyst",
    company: "Icario Health",
    description:
      "Led internal product tooling for a B2B healthcare technology company. Ran an A/B test that increased survey completion by 5x, preserving a key enterprise client relationship.",
  },
  {
    date: "2018 - 2020",
    title: "Product Engineer II",
    company: "Smiths Medical",
    description:
      "Led product development for medical device software systems. Ensured EU regulatory compliance, preserving $90M in annual revenue.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container width="narrow">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          About
        </h1>

        <div className="prose mb-16">
          <p>
            I&apos;m a Senior Product Manager in New York building AI-powered products
            in financial services. Right now I lead an enterprise AI platform at
            Northwestern Mutual that automates how financial advisors document
            client meetings — from Zoom recordings to structured data that feeds
            directly into planning systems.
          </p>
          <p>
            Before that I worked across data platforms, BI tools, healthcare
            technology, and medical devices. The thread through all of it:
            taking messy, complex problems and turning them into products people
            actually use.
          </p>
          <p>
            Outside of work, I build things. Applyist is an AI-powered job
            application assistant I&apos;m building with React, Supabase, and the
            Claude API. I&apos;m also working on Headway, a financial goal tracking
            app. I&apos;ve built websites for small businesses including a restaurant
            consulting firm and a livestock nutrition company.
          </p>
          <p>
            I studied Industrial Engineering at Iowa State, hold a Lean Six Sigma
            Green Belt from Oxford, and mentor product managers through the PM
            Club at NYU.
          </p>
          <p>
            When I&apos;m not building products, I&apos;m probably walking my goldendoodle,
            optimizing travel points, or watching the Yankees.
          </p>
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
          Career Timeline
        </h2>
        <Timeline entries={career} />
      </Container>
    </section>
  );
}
