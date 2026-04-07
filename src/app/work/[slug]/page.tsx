import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudy, getAllSlugs } from "@/lib/mdx";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { MetricGrid } from "@/components/MetricGrid";
import { Callout } from "@/components/Callout";

const components = {
  MetricGrid,
  Callout,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.meta.title,
    description: study.meta.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <CaseStudyLayout {...study.meta}>
      <MDXRemote source={study.content} components={components} />
    </CaseStudyLayout>
  );
}
