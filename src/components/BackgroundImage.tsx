import useColorScheme from '../hooks/useColorScheme'; // Adjust the import path as necessary

function BackgroundImage() {
  const colorScheme = useColorScheme();

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
            <img fetchPriority='high' src="/assets/images/backgrounds/dark.png" alt="Background" style={{ 
              filter: 'brightness(90%)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </>
        ) : (
          <>
            <source srcSet="/assets/images/backgrounds/light.avif" type="image/avif" />
            <source srcSet="/assets/images/backgrounds/light.webp" type="image/webp" />
            <img fetchPriority='high' src="/assets/images/backgrounds/light.png" alt="Background" style={{ 
              filter: 'brightness(90%)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </>
        )}
      </picture>
    </div>
  );
}

export default BackgroundImage;