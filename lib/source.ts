import { docs } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import type * as PageTree from 'fumadocs-core/page-tree';

// See https://fumadocs.dev/docs/headless/source-api for more info
const baseSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

/**
 * Recursively extract all pages from a folder node
 */
function extractPagesFromFolder(folder: PageTree.Folder): PageTree.Item[] {
  const pages: PageTree.Item[] = [];

  // Add the index page if it exists
  if (folder.index) {
    pages.push(folder.index);
  }

  // Recursively process children
  folder.children.forEach((child) => {
    if (child.type === 'page') {
      pages.push(child);
    } else if (child.type === 'folder') {
      // Recursively extract pages from nested folders
      pages.push(...extractPagesFromFolder(child));
    }
  });

  return pages;
}

/**
 * Transform the page tree to flatten root sections and add separators between categories
 * Pages are listed directly under separators, not nested in folders
 */
function transformPageTreeWithSeparators(
  originalTree: PageTree.Root,
): PageTree.Root {
  const transformedChildren: PageTree.Node[] = [];

  // Iterate through root children (these are the root folders)
  originalTree.children.forEach((node, index) => {
    if (node.type === 'folder') {
      // Create separator node with the folder name
      const separator: PageTree.Separator = {
        type: 'separator',
        name: node.name,
        $id: `separator-${index}`,
      };
      transformedChildren.push(separator);

      // Extract all pages from the folder (flattening the structure)
      const pages = extractPagesFromFolder(node);
      transformedChildren.push(...pages);
    } else if (node.type === 'page') {
      // For pages at root level, add them directly
      transformedChildren.push(node);
    }
  });

  // Create new root with transformed children
  return {
    ...originalTree,
    children: transformedChildren,
  };
}

// Transform the page tree and create the source export
const transformedPageTree = transformPageTreeWithSeparators(baseSource.pageTree);

export const source = Object.assign({}, baseSource, {
  pageTree: transformedPageTree,
});

export function getPageImage(page: InferPageType<typeof baseSource>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof baseSource>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
