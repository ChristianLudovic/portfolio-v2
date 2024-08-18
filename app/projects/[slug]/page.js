import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectPage({ params }) {
    const { slug } = params;
    const projectsDirectory = path.join(process.cwd(), 'data/projects');
    const filePath = path.join(projectsDirectory, `${slug}.json`);
    const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return (
      <div className="mx-auto max-w-[1000px] w-full h-screen py-6 flex flex-col items-center min-h-screen">
      <nav className="flex items-center justify-between w-full">
        <Image src="/logo.svg" width={130} height={0} className="h-auto" alt="logo" />
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center">
            <svg class="vuesax-outline-search-normal2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#292D32" />
              <path d="M22 22.75C21.81 22.75 21.62 22.68 21.47 22.53L19.47 20.53C19.18 20.24 19.18 19.76 19.47 19.47C19.76 19.18 20.24 19.18 20.53 19.47L22.53 21.47C22.82 21.76 22.82 22.24 22.53 22.53C22.38 22.68 22.19 22.75 22 22.75Z" fill="#292D32" />
            </svg>
          </div>
          <div className="flex items-center justify-center">
            <svg class="vuesax-outline-moon2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.46 22.75C12.29 22.75 12.12 22.75 11.95 22.74C6.35 22.49 1.67 17.98 1.28 12.48C0.94 7.76 3.67 3.35 8.07 1.5C9.32 0.98 9.98 1.38 10.26 1.67C10.54 1.95 10.93 2.6 10.41 3.79C9.95 4.85 9.72 5.98 9.73 7.14C9.75 11.57 13.43 15.33 17.92 15.51C18.57 15.54 19.21 15.49 19.83 15.38C21.15 15.14 21.7 15.67 21.91 16.01C22.12 16.35 22.36 17.08 21.56 18.16C19.44 21.06 16.07 22.75 12.46 22.75ZM2.77 12.37C3.11 17.13 7.17 21.03 12.01 21.24C15.3 21.4 18.42 19.9 20.34 17.28C20.49 17.07 20.56 16.92 20.59 16.84C20.5 16.83 20.34 16.82 20.09 16.87C19.36 17 18.6 17.05 17.85 17.02C12.57 16.81 8.25 12.38 8.22 7.16C8.22 5.78 8.49 4.45 9.04 3.2C9.14 2.98 9.16 2.83 9.17 2.75C9.08 2.75 8.92 2.77 8.66 2.88C4.85 4.48 2.49 8.3 2.77 12.37Z" fill="#292D32" />
            </svg>
          </div>
        </div>
      </nav>
      <main className="max-w-[800px] w-full space-y-[22px] mt-[38px] mb-[70px] flex-grow">
        <h1 className="font-bold text-[28px] ">{project.name}</h1>
        <div className='px-[20px]'>
          <Image 
            src={project.image} 
            width={1920} 
            height={1080} 
            layout='responsive'
            className="w-full h-auto rounded-lg"
          />
          <p>Par {project.author} le {project.date}</p>
          {project.content.map((bloc, index) => {
            switch(bloc.type) {
              case 'paragraph':
                return <p key={index}>{bloc.text}</p>
              case 'heading':
                return React.createElement(`h${bloc.level}`, {key: index}, bloc.text)
              case 'list':
                return (
                  <ul key={index}>
                    {bloc.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )
              default:
                return null
            }
          })}
          <div>
            Tags: {project.tags.join(', ')}
          </div>
        </div>
      </main>
      <footer className="flex justify-center mt-[10px] flex-shrink">
        <p className="flex justify-center"> 
          © 2023, <Link legacyBehavior href="mailto:talchrist10@gmail.com"><a className=" underline"> Christian Ludovic</a></Link>
        </p>
      </footer>
    </div>
    );
}

// Obligatoire dans la nouvelle structure pour générer les routes dynamiques
export async function generateStaticParams() {
    const projectsDirectory = path.join(process.cwd(), 'data/projects');
    const filenames = fs.readdirSync(projectsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace('.json', ''),
    }));
}
