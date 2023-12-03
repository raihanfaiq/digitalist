import type { Content } from '@prismicio/client';
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';
import styles from './index.module.css';

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className={'w-full font-bold'}>
      <div
        className={
          'max-w-6xl mx-auto mt-24 text-lg leading-7 font-semibold text-gray-900'
        }>
        <PrismicRichText
          field={slice.primary.content}
          components={{
            heading1: ({ children }) => (
              <h1 className="p-2 text-[16px] font-semibold">{children}</h1>
            ),
          }}
        />
      </div>
    </section>
  );
}
