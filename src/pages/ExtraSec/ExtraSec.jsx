import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img5.jpg';
import image6 from '../../assets/img6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const ExtraSec = () => {
    return (
      <div className='my-12 container'>
        <h2 className="text-3xl text-center font-bold mb-5 text-[#bc986b]">Choose Us</h2>
        <style>
          {`
          /* Custom styles for the slider */
          .swiper-container {
            width: 100%;
            padding: 50px 0;
          }
          
          .swiper-slide {
            width: 350px;
            height: 280px;
            border-radius: 10px;
            overflow: hidden;
          }
          
          .swiper-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .swiper-button-prev,
          .swiper-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          
          .swiper-button-prev ion-icon,
          .swiper-button-next ion-icon {
            font-size: 24px;
          }
          
          .swiper-button-prev {
            left: 20px;
          }
          
          .swiper-button-next {
            right: 20px;
          }
          
          .swiper-pagination {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
          }
          
          `}
        </style>
       <Swiper
       effect={ 'coverflow' }
       grabCursor={ true }
       centeredSlides={ true }
       loop={ true }
       slidesPerView={ 'auto' }
       coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
       }
       pagination={{ el: '.swiper-pagination', clickable: true}}
       navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
       }}
       modules={[EffectCoverflow, Pagination, Navigation]}
       className='swiper_container'
       >
       
        
          <SwiperSlide>
          <div className="slide slide1" >
            <img src={image1} alt="" />
            </div> 
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide2">
          <img src={image2} alt="" />
            </div>   
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide3">
          <img src={image3} alt="" />
            </div>  
            </SwiperSlide> 

            <SwiperSlide>
          <div className="slide slide4">
          <img src={image4} alt="" />
            </div>    
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide5">
          <img src={image5} alt="" />
            </div> 
            </SwiperSlide>

            <SwiperSlide>
          <div className="slide slide6">
          <img src={image6} alt="" />
            </div>    
            </SwiperSlide>
        
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon className="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon className="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* </div> */}
       </Swiper>
       
      </div>
    );
};

export default ExtraSec;