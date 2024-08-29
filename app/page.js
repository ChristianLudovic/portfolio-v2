import Image from "next/image";
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function Home() {

  const articlesDirectory = path.join(process.cwd(), 'data/blog');
    const filenames = fs.readdirSync(articlesDirectory);

    const articles = filenames.map((filename) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return {
            slug: filename.replace('.json', ''),
            ...fileContents,
        };
    });

  return (
    <div className="mx-auto max-w-[1000px] w-full h-max flex flex-col items-center min-h-screen">
      <main className="max-w-[800px] w-full mb-[70px] flex-grow space-y-8 mt-12">
        <h1 className="text-4xl font-normal leading-[130%]">Thoughts of a Random Developer</h1>
        <div className="flex flex-col space-y-6">
          {articles.map((article) => (
            <div className=" w-full space-y-3" key={article.slug}>
              <Link legacyBehavior href={`/blog/${article.slug}`} ><h2 className="text-xl md:text-2xl text-primary-600 hover:underline cursor-pointer">{article.name}</h2></Link>
              <p className="text-xl md:text-lg italic leading-[170%] font-light">{article.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
