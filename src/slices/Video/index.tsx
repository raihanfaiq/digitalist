'use client';
import { Transition } from '@headlessui/react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
});

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video = ({ slice }: VideoProps): JSX.Element => {
  const [Playing, setPlaying] = useState(false);

  return (
    <section className=" relative flex items-center justify-center w-full py-20 mx-auto xl:pt-28 h-80 aspect-w-16 aspect-h-9 bg-[#13075F]">
      <div className="container mx-auto flex items-center justify-center">
        <ReactPlayer
          controls={true}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          playing={Playing}
          url={slice.primary.video.embed_url}
        />
      </div>
    </section>
  );
};

export default Video;
