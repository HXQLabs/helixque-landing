import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import Link from 'next/link';

export default async function LegalPage({ params }: { params: any }) {
  const dir = path.join(process.cwd(), 'content/legal');

  // Next warns that params can be async — await it to be safe
  const resolvedParams = await (params as any);
  const rawSlug = resolvedParams?.slug;
  // normalize requested slug: lowercased and trimmed to tolerate filenames with stray spaces
  const requested = String(rawSlug || '').toLowerCase().trim();

  // Build list of available legal pages (slugs + titles from frontmatter)
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const pages = files.map((file) => {
    // trim filename-derived slug to avoid mismatches when a file has a leading/trailing space
    const slug = file.replace(/\.md$/, '').trim();
    try {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return { file, slug, title: (data && (data.title || data.name)) || slug };
    } catch (e) {
      return { file, slug, title: slug };
    }
  });

  // Case-insensitive match: allow URLs like /legal/license to match LICENSE.md
  const match = pages.find((p) => String(p.slug || '').toLowerCase().trim() === requested);
  if (!match) {
    notFound();
  }

  const filePath = path.join(dir, match.file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  const title = data?.title ?? data?.name ?? match.slug;

  return (
    <div className="mx-auto max-w-3xl p-6">

      <article className="prose dark:prose-invert">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
