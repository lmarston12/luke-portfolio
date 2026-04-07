import { Container } from "./Container";
import { MetricGrid } from "./MetricGrid";

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
  return (
    <Container width="narrow" className="py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-accent bg-accent/8 px-2.5 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm text-text-secondary">
            {company} &middot; {role} &middot; {date}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h1>
      </div>

      {metrics.length > 0 && <MetricGrid metrics={metrics} />}

      <div className="prose mt-10">{children}</div>
    </Container>
  );
}
