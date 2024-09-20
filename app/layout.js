import localFont from 'next/font/local'
import "./globals.css";

const Satoshi = localFont({
  src: [
    {
      path: '../public/satoshi/Satoshi-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal'
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
 })

export const metadata = {
  title: "Blog",
  description: "Sharing my thoughts and experiences as a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Satoshi.className} px-6 relative`} >{children}</body>
    </html>
  );
}
