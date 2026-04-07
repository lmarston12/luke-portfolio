interface ContainerProps {
  children: React.ReactNode;
  width?: "wide" | "narrow";
  className?: string;
}

export function Container({
  children,
  width = "wide",
  className = "",
}: ContainerProps) {
  const maxWidth = width === "wide" ? "max-w-[1200px]" : "max-w-[720px]";
  return (
    <div className={`mx-auto ${maxWidth} px-6 ${className}`}>{children}</div>
  );
}
