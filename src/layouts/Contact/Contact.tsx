import { useTranslation } from "@/contexts/TranslationContext";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>

<section id="contact" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 accent-border inline-block">{t('section_contact')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
          
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6">{t('contact_info')}</h3>
                
                <div className="space-y-6">
                
                    <div className="flex items-start space-x-4">
                        <div className="bg-sky-600 p-3 rounded-lg">
                            <i className="fa-solid fa-phone text-white text-xl"></i>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t('contact_phone')}</p>
                            <a href="tel:+523319429592" className="text-white hover:text-sky-400 font-semibold">+52 3319429592</a>
                        </div>
                    </div>
                    
                    
                    <div className="flex items-start space-x-4">
                        <div className="bg-sky-600 p-3 rounded-lg">
                            <i className="fa-solid fa-phone text-white text-xl"></i>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t('contact_phone')}</p>
                            <a href="tel:+523339575070" className="text-white hover:text-sky-400 font-semibold">+52 3339575070</a>
                        </div>
                    </div>
                    
                   
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-500 p-3 rounded-lg">
                            <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{t('contact_whatsapp')}</p>
                            <a href="https://wa.me/523319429592" target="_blank" className="text-white hover:text-green-400 font-semibold">{t('contact_whatsapp_text')}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6">{t('contact_form_title')}</h3>
                
                <form className="space-y-4">
                    <div>
                        <input type="text" placeholder={t('contact_placeholder_name')} className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-sky-500 focus:outline-none transition" required/>
                    </div>
                    
                    <div>
                        <input type="email" placeholder={t('contact_placeholder_email')} className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-sky-500 focus:outline-none transition" required/>
                    </div>
                    
                    <div>
                        <textarea placeholder={t('contact_placeholder_message')} rows={4} className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-sky-500 focus:outline-none transition" required></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white py-3 rounded-lg font-bold transition">{t('contact_btn_send')}</button>
                </form>
            </div>
        </div>
    </section>



    </>
  )
}