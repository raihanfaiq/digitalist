import { PrismicPreview } from '@prismicio/next';
import { createClient, repositoryName } from '@/prismicio';
import Navigation from '@/components/Navigation';
import './global.css';
import Footer from '@/components/Footer';

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
      <body style={{ backgroundColor: '#13075F', color: '#FFF5EA' }}>
        <Navigation />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
