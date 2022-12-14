import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function MainBg() {
    let [fade, setFade] = useState('');
    let [hover, setHover] = useState(0);
    let navigate = useNavigate();
  
    const swiperStyle = {
      position: "absolute",
      left: "0",
      top: "0",
      width: "50%",
      height: "100%",
      backgroundColor: "black",
      overflow: "hidden"
    }
  
    useEffect(() => {
  
      let timer = setTimeout(() => {
        setFade(('end'));
      }, 1000)
  
      return () => {
        clearTimeout(timer);
        setFade('');
      }
    }, [])
  
    return (
      <div className={styles['main-con']}>
        <Swiper
          style={swiperStyle}
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          autoplay={{ delay: 4000 }}
          // navigation={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <h1 className={styles['main-title']}>지구를 위한</h1>
          <h1 className={styles['main-title']}><span>낭만</span>적인 <span>소비</span>습관</h1>
          <SwiperSlide><img src="/mainv1.jpg" className={styles['main-bg']}></img></SwiperSlide>
          <SwiperSlide><img src="/mainv2.jpg" className={styles['main-bg']}></img></SwiperSlide>
          <SwiperSlide><img src="/mainv3.jpg" className={styles['main-bg']}></img></SwiperSlide>
  
        </Swiper>
  
        <div className={styles['right-box']}>
          <h2 className={styles['sub-title']}><span>제로웨이스트</span>를 지향하는</h2>
          <h2 className={styles['sub-title']}>환경친화적 소품샵</h2>
          <div onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)} className={ `${styles['right-img']} ${styles.start}` + fade }
          onClick={() => { navigate('/kitchen') }}>
            <img src="/right1.jpg"></img>
            {
              hover == 1 ? <p>주방용품</p> : null
            }
          </div>
          <div onMouseOver={() => setHover(2)} onMouseOut={() => setHover(0)} className={ `${styles['right-img']} ${styles.start}` + fade }
          onClick={() => { navigate('/bath') }}>
            <img src="/right2.jpg"></img>
            {
              hover == 2 ? <p>욕실용품</p> : null
            }
          </div>
        </div>
      </div>
    );
  
  }


  export default MainBg;