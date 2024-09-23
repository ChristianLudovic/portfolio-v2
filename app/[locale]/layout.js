import localFont from 'next/font/local'
import "./globals.css";
import { I18nProviderClient } from '../../locales/client'
import { Providers } from './providers';

const Satoshi = localFont({
  src: [
    {
      path: '../../public/satoshi/Satoshi-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../public/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/satoshi/Satoshi-Light.otf',
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

export default function RootLayout({ params, children }) {

  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <script defer data-domain="chrisfaciledev.me" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${Satoshi.className} px-6 relative`} >
        <I18nProviderClient locale={locale}>
        {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
