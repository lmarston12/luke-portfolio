interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 text-center">
      <p className="text-3xl font-bold text-accent mb-1">{value}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}
