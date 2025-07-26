import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ title, date, content }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 mb-6">{date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      content: contentHtml,
    },
  };
}
