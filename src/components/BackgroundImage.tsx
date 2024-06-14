function BackgroundImage() {
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
        <source srcSet="/assets/images/background.avif" type="image/avif" />
        <source srcSet="/assets/images/background.webp" type="image/webp" />
        <img src="/assets/images/background.png" alt="Background" style={{ 
          filter: 'blur(12px) brightness(75%)',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }} />
      </picture>
    </div>
  );
}

export default BackgroundImage;