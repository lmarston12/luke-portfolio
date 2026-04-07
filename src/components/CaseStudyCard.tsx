import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  slug: string;
  title: string;
  company: string;
  category: string;
  summary: string;
  metrics: Metric[];
}

export function CaseStudyCard({
  slug,
  title,
  company,
  category,
  summary,
  metrics,
}: CaseStudyCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <article className="bg-surface border border-border rounded-lg p-6 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-accent bg-accent/8 px-2.5 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-text-secondary">{company}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
          {summary}
        </p>
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
            {metrics.slice(0, 3).map((metric) => (
              <div key={metric.label}>
                <p className="text-lg font-semibold text-accent">
                  {metric.value}
                </p>
                <p className="text-xs text-text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
