
import { useTranslation } from "@/contexts/TranslationContext";
import './sunrise.css'

export default function Section() {
  const { t } = useTranslation();
  return (
    <>



<div className=" bg-gradient-to-t from-slate-900 to-slate-950">

      <section className=" bg-neutral-primary    bg-neutral-primary
    py-15        /* mobile (default) */
    sm:py-10    /* ≥640px */
    md:py-16    /* ≥768px */
    lg:py-20    /* ≥1024px */
    xl:py-32    /* ≥1280px */ ">


      

   

        <div className=" grid grid-cols-1 sm:grid-cols-2  "> 

          <div className="sm:pt-0 md:pt-0 lg:pt-0  ">

            <div className="lg:pt-10 sm:pt-10 md:pt-10 lg:pb-10 sm:pb-10 md:pb-10 flex  items-center justify-center text-center">

              <div className="sun  w-50 h-50 sm:w-32 sm:h-32 md:w-60 md:h-60 lg:w-100 lg:h-100">
            
           

              </div>

            </div >

          </div>

          <div className=" pt-5 sm:pt-10 md:pt-10 lg:pt-10 ">


            <h1 className="pt-10 sm:pt-20 md:pt-8 lg:pt-20 text-5xl md:text-7xl font-extrabold mb-6 items-center justify-center text-center">

             <span className="text-transparent bg-clip-text bg-gradient-to-t from-amber-400 to-red-900
              
              sm:bg-gradient-to-t md:bg-gradient-to-t lg:bg-gradient-to-r">{t('hero_dawn')} </span>

              <span className="text-transparent 
        bg-clip-text bg-gradient-to-t from-amber-400 to-red-900 sm:bg-gradient-to-t md:bg-gradient-to-t lg:bg-gradient-to-r">{t('hero_intelligent')}</span>
            </h1>

            <p className="text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto mb-10 text-center items-center justify-center" >
              {t('hero_description')}
            </p>

          </div>

        </div>

          

      </section>

 </div>

    


      




    </>
  )
}
