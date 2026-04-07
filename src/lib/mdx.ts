import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/work");

export interface CaseStudyMeta {
  title: string;
  slug: string;
  company: string;
  role: string;
  date: string;
  category: string;
  summary: string;
  metrics: { value: string; label: string }[];
  featured: boolean;
  order: number;
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const studies = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return data as CaseStudyMeta;
  });

  return studies.sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: data as CaseStudyMeta,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
