import { Container } from "./Container";
import { MetricGrid } from "./MetricGrid";
import { HeroReveal } from "./motion/HeroReveal";
import { FadeIn } from "./motion/FadeIn";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyLayoutProps {
  title: string;
  company: string;
  role: string;
  date: string;
  category: string;
  metrics: Metric[];
  children: React.ReactNode;
}

export function CaseStudyLayout({
  title,
  company,
  role,
  date,
  category,
  metrics,
  children,
}: CaseStudyLayoutProps) {
  const heroMetric = metrics.length > 0 ? metrics[0] : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12">
        <Container width="narrow">
          <HeroReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-accent bg-accent/8 px-2.5 py-1 rounded-full">
                {category}
              </span>
              <span className="text-sm text-text-secondary">
                {company} &middot; {role} &middot; {date}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
          </HeroReveal>

          {heroMetric && (
            <HeroReveal delay={0.2}>
              <div className="mt-8">
                <p className="text-5xl sm:text-6xl font-bold text-accent">
                  {heroMetric.value}
                </p>
                <p className="text-base text-text-secondary mt-1">
                  {heroMetric.label}
                </p>
              </div>
            </HeroReveal>
          )}
        </Container>
      </section>

      {/* Metrics + Content */}
      <Container width="narrow" className="pb-16">
        <div className="border-t border-border pt-8">
          {metrics.length > 1 && (
            <FadeIn>
              <MetricGrid metrics={metrics.slice(1)} animated />
            </FadeIn>
          )}

          <FadeIn delay={0.1}>
            <div className="prose mt-10">{children}</div>
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
