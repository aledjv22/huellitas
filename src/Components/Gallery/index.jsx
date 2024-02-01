import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery ({gallery}) {
  
  const images = gallery.map(image => ({
    original: image,
    thumbnail: image,
  }));

  const renderLeftNav = (onClick, disabled) => {
    return (
      <button type="button" className="image-gallery-icon image-gallery-left-nav" 
      aria-label="Previous Slide" style={{ color: 'rgba(252, 206, 244, 1)'}}
      onClick={onClick} disabled={disabled}
      >
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" 
        fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" 
        strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return (
      <button type="button" className="image-gallery-icon image-gallery-right-nav" 
      aria-label="Next Slide" style={{ color: '#fccef4'}}
      onClick={onClick} disabled={disabled}
      >
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" 
        fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" 
        strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    );
  }

  const renderFullscreenButton = (onClick, isFullscreen) => {
    return (
      <button type="button" className="image-gallery-icon image-gallery-fullscreen-button" 
      aria-label="Open Fullscreen" style={{ color: '#fccef4'}} 
      onClick={onClick} >
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round">
          {
          isFullscreen ?
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
            :
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
          }
        </svg>
      </button>
    );
  }

  const renderPlayPauseButton = (onClick, isPlaying) => {
    const renderPlayPauseIcon = () => {
      return (
        <>
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </>
      );
    }
    return (
      <button type="button" className="image-gallery-icon image-gallery-play-button" 
      aria-label="Play or Pause Slideshow" style={{ color: '#fccef4'}}
      onClick={onClick}>
        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round">
          {
          isPlaying ?
            renderPlayPauseIcon()
            :
            <polygon points="5 3 19 12 5 21 5 3"/>}
        </svg>
      </button>
    );
  }

  return (
    <div className='mt-1 w-[500px]'>
      <ImageGallery items={images}
      showIndex={true}
      slideInterval={2000}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      renderFullscreenButton={renderFullscreenButton}
      renderPlayPauseButton={renderPlayPauseButton}
      />
    </div>
  );
}

export default Gallery;