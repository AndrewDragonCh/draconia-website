"use client"

import { useContext } from 'react';
import { ColorSchemeContext } from '../lib/ColorScheme/ColorSchemeContext';
import Image from 'next/image';

function BackgroundImage() {
  let { colorScheme } = useContext(ColorSchemeContext);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    }}>
      <picture>
        {colorScheme === 'dark' ? (
          <>
            <source srcSet="/assets/images/backgrounds/dark.avif" type="image/avif" />
            <source srcSet="/assets/images/backgrounds/dark.webp" type="image/webp" />
            <Image
              src="/assets/images/backgrounds/dark.png"
              alt="Background"
              style={{
                filter: 'brightness(100%)',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              layout="fill"
              objectFit="cover"
            />
          </>
        ) : (
          <>
            <source srcSet="/assets/images/backgrounds/light.avif" type="image/avif" />
            <source srcSet="/assets/images/backgrounds/light.webp" type="image/webp" />
            <Image
              src="/assets/images/backgrounds/light.png"
              alt="Background"
              style={{
                filter: 'brightness(75%)',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              layout="fill"
              objectFit="cover"
            />
          </>
        )}
      </picture>
    </div>
  );
}

export default BackgroundImage;