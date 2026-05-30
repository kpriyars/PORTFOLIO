import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './PhotoSlideshow.module.css';

import img1 from '../../assets/kp1.jpeg';
import img2 from '../../assets/kp2.jpeg';
import img3 from '../../assets/kp3.jpeg';

function PhotoSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div><img src={img1} alt="Project 1" className={styles.slideImage} /></div>
        <div><img src={img2} alt="Project 2" className={styles.slideImage} /></div>
        <div><img src={img3} alt="Project 3" className={styles.slideImage} /></div>
      </Slider>
    </div>
  );
}

export default PhotoSlideshow;