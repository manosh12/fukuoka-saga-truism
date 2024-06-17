import {Button} from "@nextui-org/react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export const NotFound = () => {
  const { t, i18n } = useTranslation();

  return(
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="container max-w-6xl bg-gray-200 py-20 px-20 mx-5 text-center rounded-md">
          <h1 className="font-bold text-7xl">OOPS!</h1>
          <div className="mt-5">
            <h4><span className="text-warning font-bold text-3xl">404</span> {t('not-found.title')}</h4>
            <h4 className="mt-2">{t('not-found.description')}</h4>
            <div className="mt-5">
              <Link to="/">
                <Button radius="full" size="lg" className="bg-warning text-white font-bold px-20 shadow-lg"> {t('not-found.backLink')} </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
