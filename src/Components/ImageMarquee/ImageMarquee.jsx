import React from 'react';
import './ImageMarquee.css'; // Import the CSS file for styling

const ImageMarquee = ({ images }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`marquee-image-${index}`} className="marquee-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
