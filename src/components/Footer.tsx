import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Luke Marston
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="mailto:lmarston2017@gmail.com"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/lukemarston/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/lukemarston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
