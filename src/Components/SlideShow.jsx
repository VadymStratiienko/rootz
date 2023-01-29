import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../styles/Swiper.module.scss";
import "../styles/swiper.css";
import energy from "../Assets/img/energy.png";
import forest from "../Assets/img/forest.png";
import sea from "../Assets/img/sea.png";
import green from "../Assets/img/green.png";
import avoid from "../Assets/img/avoid.png";

const SlideShow = () => {
  return (
    <section className={styles.bg_container}>
      <div className={styles.container_slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
          }}
          speed={400}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide data-aos="zoom-in" data-aos-duration="3000">
            <div>
              <img src={avoid} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="zoom-in" data-aos-duration="3000">
            {" "}
            <div>
              <img src={green} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="zoom-in" data-aos-duration="3000">
            {" "}
            <div>
              <img src={sea} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="zoom-in" data-aos-duration="3000">
            {" "}
            <div>
              <img src={forest} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="zoom-in" data-aos-duration="3000">
            {" "}
            <div>
              <img src={energy} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SlideShow;
