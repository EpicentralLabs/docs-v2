import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from '@/components/layout/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Edit } from 'lucide-react';
import { cn } from '@/lib/cn';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  
  // Redirect root /docs to /docs/getting-started
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/1-getting-started');
  }
  
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Construct file path from slugs
  // For single slug: '1-getting-started' -> '1-getting-started/index.mdx'
  // For multiple slugs: ['2-epicentral-dao', '1-governance-process'] -> '2-epicentral-dao/1-governance-process.mdx'
  const filePath = page.slugs.length === 1
    ? `${page.slugs[0]}/index.mdx`
    : `${page.slugs.slice(0, -1).join('/')}/${page.slugs[page.slugs.length - 1]}.mdx`;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      lastUpdate={page.data.lastModified}
      tableOfContent={{
        style: 'clerk', // Change to 'clerk' for Clerk-style TOC
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <a
          href={`https://github.com/EpicentralLabs/docs-v2/blob/master/content/docs/${filePath}`}
          rel="noreferrer noopener"
          target="_blank"
          className={cn(
            'inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground',
            'transition-colors hover:text-fd-foreground',
            'mb-6 not-prose'
          )}
        >
          <Edit className="size-4" />
          Edit on GitHub
        </a>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
