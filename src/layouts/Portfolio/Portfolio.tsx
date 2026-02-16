import { useTranslation } from "@/contexts/TranslationContext";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <>

    <section id="portfolio" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 accent-border inline-block">{t('section_portfolio')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 card-hover overflow-hidden">
                <div className="mb-4 h-48 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg overflow-hidden">
                    <img src="https://www.lavanderia10h.com.mx/design/LogNavbar/logo-navbar.png" alt="Lavandería 10h" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('portfolio_lavanderia_title')}</h3>
                <p className="text-gray-400 mb-4">{t('portfolio_lavanderia_desc')}</p>
                <a href="https://www.lavanderia10h.com.mx/" target="_blank" className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 rounded-lg transition">{t('portfolio_visit_btn')}</a>
            </div>
       



          

            <div className="   bg-slate-800 p-8 rounded-2xl border border-slate-700 card-hover overflow-hidden">
                <div className="mb-4 h-48 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg overflow-hidden flex items-center justify-center p-4">
                    <img src="src/assets/icons/Dental Software.png" alt="Dental Software" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('portfolio_dental_title')}</h3>
                <p className="text-gray-400 mb-4">{t('portfolio_dental_desc')}</p>
                <div className="inline-block bg-sky-600 text-white px-6 py-2 rounded-lg">{t('portfolio_dental_status')}</div>
            </div>
       


        </div>
    </section>
   




    </>
  )
}
