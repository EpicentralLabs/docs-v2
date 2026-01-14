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
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import { buttonVariants } from '@/components/ui/button';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  
  // Redirect root /docs to /docs/introduction
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/introduction');
  }
  
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Construct file path from slugs
  // For single slug: 'introduction' -> 'introduction/index.mdx'
  // For multiple slugs: ['epicentral-dao', 'governance-process'] -> 'epicentral-dao/governance-process.mdx'
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
        <div className="flex flex-wrap gap-2 items-center border-b pt-2 pb-6 mb-6">
          <a
            href={`https://github.com/EpicentralLabs/docs-v2/blob/master/content/docs/${filePath}`}
            rel="noreferrer noopener"
            target="_blank"
            className={cn(
              buttonVariants({
                color: 'secondary',
                size: 'sm',
                className: 'gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground min-h-[32px] min-w-[32px] sm:min-h-[36px] sm:min-w-0 text-xs',
              }),
              'not-prose'
            )}
          >
            <Edit />
            <span className="hidden sm:inline">Edit on GitHub</span>
            <span className="sm:hidden">Edit</span>
          </a>
          <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
          <ViewOptions
            markdownUrl={`${page.url}.mdx`}
            githubUrl={`https://github.com/EpicentralLabs/docs-v2/blob/master/content/docs/${filePath}`}
          />
        </div>
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
