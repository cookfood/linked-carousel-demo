import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import  { Swiper as MySwiper, Controller } from 'swiper';

import 'swiper/css';

function SwiperNextButton() {
  const swiper = useSwiper();

  return <button  onClick={() => swiper.slideNext()}>Next</button>
}

function SwiperPrevButton() {
  const swiper = useSwiper();
  return <button  onClick={() => swiper.slidePrev()}>Prev</button>
}

function CustomSlideDetail(props: {index:number})
{
  const swiperSlide = useSwiperSlide();
  return <div>Slidearoo {props.index}</div>
}

function CustomSlideTitle(props: {index:number})
{
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  return <a style={{color:swiperSlide.isActive ? "red" : ""}} onClick={() => swiper.slideTo(props.index-1)}>Nav {props.index}</a>
}

function App() {
  const [firstSwiper, setFirstSwiper] = useState<MySwiper>();
  const [secondSwiper, setSecondSwiper] = useState<MySwiper>();

  return (
    <div className="App">
    
    <div style={{margin:20,width:'50%', height:'300'}}>

    <Swiper
      slidesPerView={3}
      modules={[Controller]}
      onSwiper={setFirstSwiper}
      rewind={true}
      controller={{ control: secondSwiper }}
      
      >
        <SwiperPrevButton />
        <SwiperNextButton />
         <SwiperSlide><CustomSlideTitle index={1} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={2} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={3} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={4} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={5} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={6} /></SwiperSlide>
      <SwiperSlide><CustomSlideTitle index={7} /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>

    </Swiper>


    <Swiper
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={1}
      
      modules={[Controller]}
      onSwiper={setSecondSwiper}
      controller={{ control: firstSwiper }}
    >
      <SwiperSlide><CustomSlideDetail index={1}/></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={2} /></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={3}/></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={4} /></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={5}/></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={6}/></SwiperSlide>
      <SwiperSlide><CustomSlideDetail index={7}/></SwiperSlide>
      
    </Swiper>
  
    </div>
    </div>
  );
}

export default App;
