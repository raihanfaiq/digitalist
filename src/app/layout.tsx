import { PrismicPreview } from '@prismicio/next';
import { createClient, repositoryName } from '@/prismicio';
import { Jost } from 'next/font/google';
import { Sen } from 'next/font/google';
import Navigation from '@/components/header/Navigation';
import './global.css';
import Footer from '@/components/Footer';
import clsx from 'clsx';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});
const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      {/* <body className={jost.variable}> */}
      <body className={clsx(jost.variable, sen.variable)}>
        {/* <body className={jost.variable} style={{ backgroundColor: '#13075F', color: '#FFF5EA' }}> */}
        <Navigation />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
