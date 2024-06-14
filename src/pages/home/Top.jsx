import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";

export const Main = () => {
  return (
    <>
      <div className="my-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mt-5">
            <h3 className="text-center font-bold text-3xl">福岡・穴場紹介</h3>
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
              <img src="/images/fukuoka.jpeg" className="w-[500px] h-auto mt-10"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
