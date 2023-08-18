import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";
import { SliderContent } from "../component/DummyApi";
import "swiper/css/effect-fade";

export default function Navslider() {
  return (
    <>
      <Swiper
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
        className="mySwiper"
      >
        {SliderContent.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="slider-img">
              <img src={slider.img} alt="" />
            </div>
            <div className="slider-content">
              <p>{slider.addline}</p>
              <h1>{slider.title}</h1>
              <h5>{slider.subtitle}</h5>
              <div className="slider-btn">
                <button>{slider.btn}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
