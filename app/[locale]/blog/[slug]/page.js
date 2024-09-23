// app/[locale]/blog/[slug]/page.js
import { getI18n } from '@/locales/server';
import Form from '@/components/form';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default async function ProjectPage({ params }) {
    const { slug, locale } = params;
    const t = await getI18n();

    const articlesDirectory = path.join(process.cwd(), 'data/blog');
    const filePath = path.join(articlesDirectory, `${slug}.json`);
    const article = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const translatedContent = article.translations[locale];

    if (!translatedContent) {
        return <div>{t('articleNotAvailable')}</div>;
    }

    return (
        <div className="md:px-2 mx-auto max-w-[1000px] w-full py-6">
            <main className="mx-auto max-w-[700px] w-full space-y-[18px] mt-[38px] flex-grow pb-9 border-b border-solid border-stone-300">
                <div className='space-y-[8px]'>
                    <h1 className="text-lg text-blue-700 font-normal leading-[130%]">{translatedContent.name}</h1>
                    <div className=''>
                        <span className='text-sm italic font-light'>{translatedContent.date} / </span>
                        <span className='text-sm italic font-light'>{translatedContent.readingTime}</span>
                    </div>
                </div>
                
                <div>
                    <div className='space-y-[16px]'>
                        {translatedContent.content.map((bloc, index) => {
                            switch(bloc.type) {
                                case 'paragraph':
                                    return <p key={index} className='text-md text-gray-600 leading-[170%]'>{bloc.text}</p>
                                case 'heading':
                                    return <h2 className='text-md font-medium leading-[130%]' key={index}>{bloc.text}</h2>
                                case 'list':
                                    return (
                                        <ul key={index}>
                                            {bloc.items.map((item, i) => <li key={i} className='text-md text-gray-600 leading-[170%]'>{item}</li>)}
                                        </ul>
                                    )
                                case 'code':
                                    return (
                                        <div className="my-4 rounded-lg overflow-hidden" key={index}>
                                            <SyntaxHighlighter 
                                                language={bloc.language} 
                                                style={tomorrow}
                                                customStyle={{
                                                    padding: '1.5rem',
                                                    fontSize: '0.8rem',
                                                    lineHeight: '1.5',
                                                    borderRadius: '0.5rem',
                                                }}
                                            >
                                                {bloc.content}
                                            </SyntaxHighlighter>
                                        </div>
                                    )
                                default:
                                    return null
                            }
                        })}
                    </div>
                </div>
            </main>
            <footer className="flex justify-col mx-auto max-w-[700px] w-full py-6">
                <div className='w-full space-y-4'>
                    <p className='text-md font-light'>{t('subscribeMessage')}</p>
                    <Form />
                </div>
            </footer>
        </div>
    );
}