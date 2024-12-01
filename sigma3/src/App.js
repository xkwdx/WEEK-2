import React from 'react';

const Gallery = () => {
  const images = [
    "https://models118.pl/4608-large_default/fiat-multipla-otto-1-18.jpg",
    "https://fabrykapasji.pl/wp-content/uploads/2022/07/Fiat-Multipla-1280.jpg",
    "https://autogaleria.pl/img/712/400/fit/content/uploads/2020/10/multipla-9.jpg",
    "https://bezpiecznapodroz.org/wp-content/uploads/2017/06/800px-Fiat_Multipla_front_20070605.jpg"
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} style={{ width: '150px', height: '150px' }} />
      ))}
    </div>
  );
};

export default Gallery;