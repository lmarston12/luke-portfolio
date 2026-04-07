interface CalloutProps {
  children: React.ReactNode;
  type?: "insight" | "decision" | "outcome";
}

const styles = {
  insight: "border-l-accent bg-accent/5",
  decision: "border-l-foreground bg-foreground/5",
  outcome: "border-l-green-600 bg-green-50",
};

const labels = {
  insight: "Key Insight",
  decision: "Product Decision",
  outcome: "Outcome",
};

export function Callout({ children, type = "insight" }: CalloutProps) {
  return (
    <div
      className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-1">
        {labels[type]}
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
