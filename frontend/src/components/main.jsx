import React, { useState } from 'react';
// import './Hero.css';

const MainPage = () => {
  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      alt: 'Smart Watch Deals',
    },
    {
      id: 2,
      image: 'https://www.google.com/imgres?q=green%20tea%20advertisement%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fgreen-tea-advertising-realistic-composition_1284-25626.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fgreen-tea-advertising-realistic-composition_6405566.htm&docid=gTr7yOKwYBT5VM&tbnid=4YX-xqbBYDLYsM&vet=12ahUKEwjZ4caQqoaKAxVIffUHHc2_MPkQM3oECFUQAA..i&w=626&h=487&hcb=2&ved=2ahUKEwjZ4caQqoaKAxVIffUHHc2_MPkQM3oECFUQAA',
      alt: 'Green Tea Offers',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512255775801-7a7f1456d1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
      alt: 'Speaker Discounts',
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="hero-carousel">
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`carousel-slide ${index === current ? 'active' : ''}`}
        >
          <img src={banner.image} alt={banner.alt} />
        </div>
      ))}
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default MainPage;
