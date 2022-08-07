import React from "react";
import "./testemonial.css";
import avt1 from "../../assets/avatar1.jpg";
import avt2 from "../../assets/avatar2.jpg";
import avt3 from "../../assets/avatar3.jpg";
import avt4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testemonial = () => {
  return (
    <section id="testemonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Random Person 1</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia ex animi
            eveniet nulla perferendis vero maxime. Beatae sint assumenda, omnis error adipisci
            blanditiis, dolore eum culpa, fugiat qui maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt2} alt="avatar 2" />
          </div>
          <h5 className="client__name">Random Person 2</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia ex animi
            eveniet nulla perferendis vero maxime. Beatae sint assumenda, omnis error adipisci
            blanditiis, dolore eum culpa, fugiat qui maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt3} alt="avatar 3" />
          </div>
          <h5 className="client__name">Random Person 3</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia ex animi
            eveniet nulla perferendis vero maxime. Beatae sint assumenda, omnis error adipisci
            blanditiis, dolore eum culpa, fugiat qui maxime.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avt4} alt="avatar 4" />
          </div>
          <h5 className="client__name">Random Person 4</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia ex animi
            eveniet nulla perferendis vero maxime. Beatae sint assumenda, omnis error adipisci
            blanditiis, dolore eum culpa, fugiat qui maxime.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testemonial;
