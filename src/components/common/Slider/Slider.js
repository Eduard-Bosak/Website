import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Импортируем модули из 'swiper/modules' вместо 'swiper'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const sliderData = [
  {
    image: "/assets/images/image1.jpg",
    title: "Проект 1",
    description: "Описание проекта 1",
  },
  {
    image: "/assets/images/image2.jpg",
    title: "Проект 1",
    description: "Описание проекта 1",
  },
  // Добавьте больше объектов для каждого слайда
];

const Slider = () => (
  <Swiper
    modules={[Pagination, Navigation, Autoplay]} // Указываем, что используем эти модули
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    autoplay={{ delay: 5000 }}
    loop={true}
  >
    {sliderData.map((slide, index) => (
      <SwiperSlide key={index}>
		<img src={slide.image} alt={`Slide ${index + 1}`} />
        <div className="slide-content">
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
