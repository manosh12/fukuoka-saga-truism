import {FaPhoneFlip} from "react-icons/fa6";
import {FaFax, FaMailBulk} from "react-icons/fa";
import React from "react";
import { useTranslation } from 'react-i18next';
import '../App.css';

export const Contact = () => {
  const { t, i18n } = useTranslation();

  return(
    <>
      {/* お問い合わせ */}
      <div id="contact">
        <div className="container mx-auto max-w-5xl py-20 my-10">
          <h4 className="text-center lg:text-3xl text-2xl font-bold text-gray-600">{t('contact.title')}</h4>
          <div className="mt-10">
            <div className="bg-gray-100 py-10 text-gray-600 text-center px-5 rounded-md">{t('contact.description')}</div>
          </div>
          <div className="text-center mt-10">
            <div className="lg:text-2xl text-xl font-bold mb-4 text-gray-600">【{t('contact.info')}】</div>
            <h1 className="mt-5 text-md lg:mx-40 mx-5 text-gray-600">〒812-0011 {t('contact.address')}</h1>
            <p className="ml-7 text-md mt-3 text-gray-600">（{t('contact.contact_time')}）</p>

            {/*電話番号*/}
            <div className="grid sm:grid-cols-3 gap-10 mx-5 mt-10">
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md pt-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaPhoneFlip /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">{t('contact.phone')}</h4>
                    <h5 className="mt-2"> 092（409）4949 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*Fax*/}
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaFax /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">{t('contact.fax')}</h4>
                    <h5 className="mt-2"> 092（409）1212 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*メール*/}
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaMailBulk /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">{t('contact.email')}</h4>
                    <h5 className="mt-2"> example@thc.jpn.com </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}