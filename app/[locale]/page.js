import Link from 'next/link';
import fs, { read } from 'fs';
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
        <div className="flex flex-col space-y-6 pl-6 border-l border-gray-200">
          {articles.map((article) => (
            <div className="w-full flex space-x-6" key={article.slug}>
              <div className='mt-6'>
                <p className='w-[140px] text-sm text-gray-400'>{scopedT(`${article.slug}.date`)}</p>  
              </div> 
              <Link legacyBehavior href={`/blog/${article.slug}`}>
                <div className='space-y-3 p-6 sm:rounded-xl hover:bg-[#FAFAFA] max-w-[630px] w-full cursor-pointer'>
                  <h2 className="text-md font-semibold">
                    {scopedT(`${article.slug}.name`)}
                  </h2>
                  <p className="text-sm text-gray-600 leading-[150%]">
                    {scopedT(`${article.slug}.description`)}
                  </p>
                  <div className='pt-2'>
                    <span className='text-sm font-medium text-[#55CCBF]'>{t('read')}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}