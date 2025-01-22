import image1 from '../../assets/carousel/image1.jpg';
import image2 from '../../assets/carousel/image2.jpg';
import image3 from '../../assets/carousel/image3.jpg';
import image4 from '../../assets/carousel/image4.jpg';
import image5 from '../../assets/carousel/image5.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import s from './carousel.module.scss';

export const CarouselImages = () => {

  const images = [image1, image2, image3, image4, image5]

  return (
    <Carousel showThumbs={false} showArrows={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index} className={s.carouselImage}>
          <img src={image} alt={`image-${index}`} />
        </div>
      ))}
    </Carousel>
  )
}