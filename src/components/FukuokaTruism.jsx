import React, {useState} from "react";
import Slider from "react-slick";
import {FaFacebook, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";
import data from "../data/fukuokaData.json";
import '../App.css';
import Modal from "react-modal";
import {FaLocationDot, FaXmark} from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

export const FukuokaTruism = () => {
  const gallery = data.fukuokaGallery;
  const { t, i18n } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  //モデルの画像を開く
  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setModalIsOpen(true);
  };

  //モデルの画像を閉じる
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  //Galleryのスライダー
  const fukuokaGalleryCenterMode = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
    ]
  };

  //福岡おすすめのデータを習得
  const fukuokaRecommend = data.fukuokaRecommendations[i18n.language] || data.fukuokaRecommendations['en'];

  return (
    <>
      {/*福岡*/}
      <div className="mt-20" id="fukuokaTruism">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-5 mx-5">
            <h3 className="text-center font-bold lg:text-3xl text-xl text-gray-600">{t('fukuoka_saga_intro.title')}</h3>
            <h6
              className="font-bold text-center text-gray-600 lg:text-xl text-md mt-5">{t('fukuoka_saga_intro.sub_title')}</h6>
            <h6
              className="text-center text-gray-600 text-sm">{t('fukuoka_saga_intro.content')}</h6>
            <h6
              className="text-center text-gray-600 my-4"> {t('fukuoka_saga_intro.second_content')}</h6>
          </div>
          <div className="flex justify-center text-gray-600 my-10 mx-5">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <div className="w-full h-0.5 bg-warning"></div>
              <div className="flex justify-between w-full max-w-md mx-5">
                <a href="#" className="text-gray-600 border-2 rounded-full shadow-lg px-3 py-3 text-lg"> <FaTwitter/>
                </a>
                <a href="#" className="text-cyan-600 border-2 rounded-full shadow-lg px-3 py-3 text-lg"> <FaFacebook/>
                </a>
                <a href="#" className="text-pink-800 border-2 rounded-full shadow-lg px-3 py-3 text-lg"> <FaInstagram/>
                </a>
                <a href="#" className="text-black border-2 rounded-full shadow-lg px-3 py-3 text-lg"> <FaTiktok/> </a>
              </div>
              <div className="w-full h-0.5 bg-warning"></div>
            </div>
          </div>

          {/*福岡の紹介 */}
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-20">
            <div className="mx-2">
              <h4 className="lg:text-2xl text-xl font-bold text-gray-600">{t('fukuoka_introduction.title')}</h4>
              <hr className="border-1 border-warning my-3"/>
              <div className="mt-5">
                <h1 className="text-md text-gray-600">
                  {t('fukuoka_introduction.description')}
                  <p className="my-5">{t('fukuoka_introduction.second_description')}</p>
                  <p className="my-5">{t('fukuoka_introduction.third_description')}</p>
                </h1>
              </div>
            </div>
            <div>
              <div className="mt-1">
                <h4 className="text-2xl font-bold text-gray-600">{t('fukuoka_introduction.watch_video')}</h4>
                <video controls="controls" className="mt-10">
                  <source
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4"
                    type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </div>

        {/*福岡画像 gallary */}
        <div className="bg-gray-100 mt-20 relative">
          <div className="container mx-auto max-w-5xl pt-10 text-gray-600">
            <h4 className="text-center lg:text-3xl text-xl">{t('fukuoka_gallery.title')}</h4>
            <p className="mt-5 mx-5">{t('fukuoka_gallery.description')}</p>
          </div>
          <div className="container mx-auto max-w-1xl py-10">
            <Slider {...fukuokaGalleryCenterMode}>
              {gallery.map((slide) => (
                <div key={slide.id} className="mx-auto p-2">
                  <img
                    src={slide.img}
                    alt={`Slide ${slide.id}`}
                    className="mx-auto w-[280px] h-[180px] rounded-sm cursor-pointer "
                    onClick={() => openModal(slide.img)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15 z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75"
          >
            <div className="relative p-5 rounded-md max-w-full max-h-full">
              {currentImage && (
                <div className="relative">
                  <img src={currentImage} alt="Selected" className="w-[700px] h-auto"/>
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75"
                  >
                    <FaXmark/>
                  </button>
                </div>
              )}
            </div>
          </Modal>
        </div>

        {/*福岡のおすすめ */}
        <div className="container mx-auto max-w-6xl my-10">
          <div className="card">
            <h4 className="text-center lg:text-2xl text-xl font-bold text-gray-600">{t('fukuoka_recommend_place.title')}</h4>
            <p className="mt-10 mx-5">{t('fukuoka_recommend_place.description')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 mx-5">
              {fukuokaRecommend.map((data) => (
                <div className="img-gallery mb-3" key={data.id}>
                  <div className="galary-content">
                    <figure className="flex justify-center">
                      <img src={data.img} alt="fukuoka1" className="w-full h-auto rounded-md"/>
                      <figcaption className="text-lg text-center glary-title text-warning font-bold uppercase">{data.title}</figcaption>
                      <figcaption className="text-sm text-center mt-2 mb-20">{data.content}</figcaption>
                      <figcaption className="flex justify-end mt-20">
                        <a href={data.address}
                           className="w-[40px] h-[40px] flex items-center justify-center shadow-lg rounded-sm border-1 border-warning-300" target="_blank">
                          <FaLocationDot className="text-warning-300"/>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
