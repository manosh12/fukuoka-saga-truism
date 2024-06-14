import React, {useState} from "react";
import Slider from "react-slick";
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import data from "../data/Data.json";
import '../App.css';
import Modal from "react-modal";
import {FaLocationDot, FaXmark} from "react-icons/fa6";

export const FukuokaTruism = () => {
  const gallery = data.fukuokaGallery;
  const fukuokaRecommended = data.fukuokaRecommendations;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const fukuokaGalaryCenterMode = {
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

  return (
    <>
      {/*FUKUOKA INTRO*/}
      <div className="mt-20" id="fukuokaTruism">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-5 mx-5">
            <h3 className="text-center font-bold text-3xl text-gray-600">福岡・佐賀穴場紹介</h3>
            <h6
              className="font-bold text-center text-gray-600 text-xl mt-5">福岡・ザガで夢を見て、計画して、予約しましょう</h6>
            <h6
              className="text-center text-gray-600 text-sm">当社はオーストラリア人が所有、運営する企業です。つまり、私たちの活動には心を込めています。</h6>
            <h6
              className="text-center text-gray-600 my-4"> 私たちはオーストラリアが大好きですが、私たちほどすべての秘密や隠された宝石を知っている人は誰もいません。ですから、私たちにご予約いただければ安全ですので、ご安心ください。</h6>
          </div>
          <div className="flex justify-center text-gray-600 my-10 mx-5">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="flex justify-between w-full max-w-md mx-5">
                <a href="#" className="text-cyan-600 border-2 rounded-full shadow-lg px-3 py-3 text-2xl"> <FaFacebook/>
                </a>
                <a href="#" className="text-pink-800 border-2 rounded-full shadow-lg px-3 py-3 text-2xl"> <FaInstagram/>
                </a>
                <a href="#" className="text-black border-2 rounded-full shadow-lg px-3 py-3 text-2xl"> <FaTiktok/> </a>
              </div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </div>

          {/*INTRO OF FUKUOKA */}
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-20">
            <div className="mx-2">
              <h4 className="text-2xl font-bold text-gray-600">Introducing Fukuoka</h4>
              <p className="text-sm py-2 text-warning-500">福岡のご紹介</p>
              <div className="mt-5">
                <h1 className="text-md text-gray-600">
                  私共、<span className="text-warning font-bold text-2xl">Team Next One </span>
                  は課題を抱えている個人から企業に至るまで皆様方の様々な依頼を受け専門家としてその解決に向けたサポート事業を主に行っています
                  <p
                    className="mt-5">個人・業界又分野によって課題は異なりますが依頼されている問題を細分化しそれに対する改善策をチームで提案を行い実施し解決していきます</p>
                  <p
                    className="my-5">チームが一つになってサポートして行きますので是非問題解決に向けた外部資源の活用をご利用ください</p>
                  <p>皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>
                </h1>
              </div>
            </div>
            <div>
              <div className="lg:mt-5">
                <h4 className="text-2xl font-bold text-gray-600 text-center">福岡観光動画を見る</h4>
                <video controls="controls" className="mt-10">
                  <source
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4"
                    type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </div>

        {/*FUKUOKA img gallary */}
        <div className="bg-gray-300 mt-20 relative">
          <div className="container mx-auto max-w-5xl pt-10">
            <h4 className="text-gray-600 text-center text-3xl">FUKUOKA TRUISM GALLERY</h4>
            <p className="mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="container mx-auto max-w-1xl py-10">
            <Slider {...fukuokaGalaryCenterMode}>
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

        {/*Fukuoka Prefecture recommendations */}
        <div className="container mx-auto max-w-6xl my-10">
          <div className="card">
            <h4 className="text-center text-2xl font-bold text-gray-600">FUKUOKA PREFECTURE RECOMMENDATIONS PLACE</h4>
            <p className="mt-10 mx-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 mx-5">
              {fukuokaRecommended.map((data) => (
                <div className="img-gallery mb-3" key={data.id}>
                  <div className="galary-content">
                    <figure className="flex justify-center">
                      <img src={data.img} alt="fukuoka1" className="w-full h-auto rounded-sm"/>
                      <figcaption className="text-lg text-center glary-title text-white">{data.title}</figcaption>
                      <figcaption className="text-sm text-center mt-2 mb-20">{data.content}</figcaption>
                      <figcaption className="flex justify-end mt-20">
                        <a href={data.address}
                           className="bg-gray-400 w-[40px] h-[40px] flex items-center justify-center shadow-lg rounded-md" target="_blank">
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