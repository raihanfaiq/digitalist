import { createClient } from '@prismicio/client';
import type { FetchLike, LinkResolverFunction } from '@prismicio/client';
import type {
  PrismicDocumentWithUID,
  FilledLinkToWebField,
  FilledLinkToDocumentField,
  LinkField,
} from '@prismicio/types';

export const linkResolver: LinkResolverFunction = (document) => {
  if (!document.uid) {
    return '/';
  }

  const routes: Record<string, string> = {
    home: '/',
    casestudy: `/work/${document.uid}`,
    'blog-post': `/blog/${document.uid}`,
  };

  return routes[document.type] || `/${document.uid}`;
};

export const docResolver = (link: LinkField): string => {
  if (link.link_type === 'Document') {
    return linkResolver(link as FilledLinkToDocumentField) ?? '';
  }

  if (link.link_type === 'Any') {
    return '';
  }

  return (link as FilledLinkToWebField).url ?? '';
};

export const client = createClient(
  process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT ?? 'charm',
  {
    fetch: fetch as FetchLike,
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
  }
);