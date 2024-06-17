import { useEffect } from "react";
import Slider from "react-slick";
import '../../App.css';
import data from "../../data/Data.json";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {FukuokaTruism} from "../../components/FukuokaTruism.jsx";
import {SagaTruism} from "../../components/SagaTruism.jsx";
import {Contact} from "../../components/Contact.jsx";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Main slide settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const mainSlide = data.slides[i18n.language] || data.slides['en'];

  useEffect(() => {
    const hash = location.hash.substring(1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* SLIDER */}
      <Slider {...settings}>
        {mainSlide.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className="relative flex flex-col justify-center items-center w-full lg:h-[70vh] h-[50vh] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 0, 0, 0.3), rgba(3, 3, 3, 0.3)),url(${slide.img})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 flex flex-col justify-center items-center">
                <div className="text-center font-serif text-white px-4">
                  <h1 className="lg:text-4xl text-2xl font-bold text-warning-500">{slide.title}</h1>
                  <p className="lg:text-lg text-md mt-5">{slide.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* 福岡観光 */}
       <FukuokaTruism />

      {/* 佐賀観光 */}
       <SagaTruism />

      {/* お問い合わせ */}
       <Contact />
    </>
  );
}
