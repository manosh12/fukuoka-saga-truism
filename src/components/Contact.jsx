import {FaPhoneFlip} from "react-icons/fa6";
import {FaFax, FaMailBulk} from "react-icons/fa";
import React from "react";

export const Contact = () => {
  return(
    <>
      {/* お問い合わせ */}
      <div id="contact">
        <div className="container mx-auto max-w-5xl py-20 my-10">
          <h4 className="text-center lg:text-3xl text-2xl font-bold text-gray-600"> CONTACT US</h4>
          <div className="mt-10">
            <div className="bg-gray-100 py-10 text-gray-600 text-center px-5 rounded-md"> サービスのお問い合わせは下記のフォームをご利用願います。なお、お問い合わせいただいた内容によっては、
              ご連絡までお時間がかかるものがございます。あらかじめご了承ください。
              また、電話でのお問い合わせも承っておりますので、本社までご連絡ください。
            </div>
          </div>
          <div className="text-center mt-10">
            <div className="lg:text-2xl text-xl font-bold mb-4 text-gray-600">【各種お問い合わせ先】</div>
            <h1 className="mt-5 text-md lg:mx-40 mx-5">〒812-0011 福岡市博多区駅前４丁目 18-19博多フロントビル2階205号</h1>
            <p className="ml-7 text-md mt-3">（月～金：9：00 ～ 17：00 ※祝祭日を除く）</p>

            {/*phone*/}
            <div className="grid sm:grid-cols-3 gap-10 mx-5 mt-10">
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl border-2 rounded-md pt-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaPhoneFlip /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">PHONE</h4>
                    <h5 className="mt-2"> 092（409）4949 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*Fax*/}
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl border-2 rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaFax /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">FAX</h4>
                    <h5 className="mt-2"> 092（409）1212 </h5>
                    <h5 className="mt-5 text-sm">*extra information(optional)</h5>
                  </div>
                </div>
              </div>

              {/*email*/}
              <div className="w-full h-auto text-left mt-5 ml-auto mr-auto max-w-lg shadow-2xl border-2 rounded-md py-5 px-10 pb-10 transition-transform duration-400 hover:-translate-y-3">
                <div className="text-gray-600">
                  <div className="flex justify-center w-full">
                    <p className="border-1 rounded-full shadow-lg px-5 py-5 text-2xl"><FaMailBulk /></p>
                  </div>
                  <div className="pt-7">
                    <h4 className="text-lg font-bold">EMAIL</h4>
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