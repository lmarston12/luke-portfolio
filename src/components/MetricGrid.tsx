import { MetricCard } from "./MetricCard";
import { CountUpMetric } from "./motion/CountUpMetric";

interface Metric {
  value: string;
  label: string;
}

interface MetricGridProps {
  metrics: Metric[];
  animated?: boolean;
}

export function MetricGrid({ metrics, animated = false }: MetricGridProps) {
  const Card = animated ? CountUpMetric : MetricCard;

  return (
    <div
      className={`grid gap-4 my-8 ${
        metrics.length === 2
          ? "grid-cols-1 sm:grid-cols-2"
          : metrics.length === 3
            ? "grid-cols-1 sm:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {metrics.map((metric) => (
        <Card key={metric.label} {...metric} />
      ))}
    </div>
  );
}
