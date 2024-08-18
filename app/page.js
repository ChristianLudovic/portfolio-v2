import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1000px] w-full h-screen py-6 flex flex-col justify-between">
      <nav className="flex items-center justify-between ">
        <Link href="/"><Image src="/logo.svg" width={130} height={0} className="h-auto" alt="logo" /></Link>
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
      <main>
        <div className="flex flex-col space-y-4 items-center">
          <Image src="/profilePic.jpg" width={100} height={100} alt="my profile pic" className="rounded-full w-[100px] h-[100px]" />
          <h1 className="text-[32px] text-center font-bold">Christian Ludovic Talekeufouet</h1>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center justify-center">
              <Link href="https://github.com/ChristianLudovic">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github  "><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" key="tonef"></path><path d="M9 18c-4.51 2-5-2-7-2" key="9comsn"></path></svg>
              </Link>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <Link href="https://x.com/Ludovic_Tal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter  "><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" key="pff0z6"></path></svg>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="https://www.linkedin.com/in/christian-ludovic-90381a230/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin  "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" key="c2jq9f"></path><rect width="4" height="12" x="2" y="9" key="mk3on5"></rect><circle cx="4" cy="4" r="2" key="bt5ra8"></circle></svg>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss  "><path d="M4 11a9 9 0 0 1 9 9" key="pv89mb"></path><path d="M4 4a16 16 0 0 1 16 16" key="k0647b"></path><circle cx="5" cy="19" r="1" key="bfqh0e"></circle></svg>
              </Link>
            </div>
          </div>
          <div className="flex space-x-[18px]">
            <Link legacyBehavior href="/projects">
              <a className="text-[#292D32] font-medium underline">View my projects</a>
            </Link>
            <Link legacyBehavior href="/blog">
              <a className="text-[#292D32] font-medium underline">Read my articles</a>
            </Link>
          </div>
        </div>
      </main>
      <footer className="flex justify-center">
        <p className="flex justify-center"> 
          © 2023, <Link legacyBehavior href="mailto:talchrist10@gmail.com"><a className=" underline"> Christian Ludovic</a></Link>
        </p>
      </footer>
    </div>
  );
}
