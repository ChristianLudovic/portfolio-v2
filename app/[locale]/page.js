import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { getI18n, getScopedI18n } from '@/locales/server';
import LanguageSelect from '@/components/languageSelect';

export default async function Home() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('blog')

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
        
        <h1 className="text-3xl font-semibold leading-[130%]">{t('mainHeading')}</h1>
        <LanguageSelect />
        
        <div className="flex flex-col space-y-6">
          {articles.map((article) => (
            <div className="w-full space-y-2" key={article.slug}>
              <Link legacyBehavior href={`/blog/${article.slug}`}>
                <h2 className="text-lg text-blue-700 hover:underline cursor-pointer">
                  {scopedT(`${article.slug}.name`)}
                </h2>
              </Link>
              <p className="text-md text-gray-600 leading-[150%]">
                {scopedT(`${article.slug}.description`)}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}