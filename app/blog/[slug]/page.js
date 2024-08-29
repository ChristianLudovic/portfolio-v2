import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ProjectPage({ params }) {
    const { slug } = params;
    const articlesDirectory = path.join(process.cwd(), 'data/blog');
    const filePath = path.join(articlesDirectory, `${slug}.json`);
    const article = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return (
      <div className="md:px-2 mx-auto max-w-[1000px] w-full py-6">
        <main className="mx-auto max-w-[700px] w-full space-y-[32px] mt-[38px]  flex-grow pb-9 border-b  border-solid border-stone-300">
          <div className='space-y-[24px]'>
              <h1 className="text-3xl md:text-4xl font-normal leading-[130%]">{article.name}</h1>
              <div className=''>
                  <span className='text-xl md:text-[20px] md:text-lg italic font-light'>{article.date} / </span>
                  <span className='text-xl md:text-[20px] italic font-light'>{article.readingTime}</span>
              </div>
          </div>
          
          <div>
            <div className='space-y-[16px]'>
              {article.content.map((bloc, index) => {
                  switch(bloc.type) {
                  case 'paragraph':
                      return <p key={index} className='font-light text-xl leading-[170%] md:text-[24px]'>{bloc.text}</p>
                  case 'heading':
                      return <h2 className='text-[24px] md:text-[28px] font-normal leading-[130%]' key={index}>{bloc.text}</h2>
                  case 'list':
                      return (
                      <ul key={index}>
                          {bloc.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                      )
                  case 'code':
                      return (
                          <div className="my-4 rounded-lg overflow-hidden">
                              <SyntaxHighlighter 
                                  language={bloc.language} 
                                  style={tomorrow}
                                  customStyle={{
                                  padding: '1.5rem',
                                  fontSize: '1.1rem',
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
            <p className='text-lg md:text-xl font-light'>Subscribe to be notified and never miss one!</p>
            <div className='flex space-x-3 w-full'>
              <input type='email' placeholder='Your email address...' className='w-full border border-stone-300 rounded-md py-2 px-4 font-light text-lg'/>
              <button className='bg-black text-white rounded-md px-4 py-2 ml-2'>Subscribe</button>
            </div>
          </div>
        </footer>
      </div>
    );
}

// Obligatoire dans la nouvelle structure pour générer les routes dynamiques
export async function generateStaticParams() {
    const projectsDirectory = path.join(process.cwd(), 'data/blog');
    const filenames = fs.readdirSync(projectsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace('.json', ''),
    }));
}
