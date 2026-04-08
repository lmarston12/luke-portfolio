import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { AnimatedTimeline } from "@/components/motion/AnimatedTimeline";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { FadeIn } from "@/components/motion/FadeIn";

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
        <HeroReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            About
          </h1>
        </HeroReveal>

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 mb-16">
          <FadeIn className="md:flex-1">
            <div className="prose">
              <p>
                I&apos;m a Senior Product Manager in New York building AI-powered
                products in financial services. Right now I lead an enterprise AI
                platform at Northwestern Mutual that automates how financial
                advisors document client meetings — from Zoom recordings to
                structured data that feeds directly into planning systems.
              </p>
              <p>
                Before that I worked across data platforms, BI tools, healthcare
                technology, and medical devices. The thread through all of it:
                taking messy, complex problems and turning them into products
                people actually use.
              </p>
              <p>
                Outside of work, I continue to build things and try to keep up with the rapidly changing tech/Product Management space. Applyist is an AI-powered job
                application assistant I&apos;m building with React, Supabase, and the
                Claude API. I&apos;m also working on Headway, a financial goal
                tracking app. I&apos;ve built websites for multiple small businesses including
                a restaurant consulting firm and a dairy cattle nutrition supplement company.
              </p>
              <p>
                I studied Industrial Engineering at Iowa State and mentor students in product managers through
                the PM Club at NYU.
              </p>
              <p>
                When I&apos;m not building products, I&apos;m probably walking my
                goldendoodle, traveling by optimizing travel points, staying active, or watching one of my favorite teams.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="md:w-[280px] shrink-0">
            <Image
              src="/images/luke-headshot.png"
              alt="Luke Marston"
              width={280}
              height={350}
              className="rounded-lg w-full"
            />
          </FadeIn>
        </div>

        <FadeIn>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-8">
            Career Timeline
          </h2>
        </FadeIn>
        <AnimatedTimeline entries={career} />
      </Container>
    </section>
  );
}
