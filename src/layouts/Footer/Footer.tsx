import { useTranslation } from "@/contexts/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
     <footer className="w-full border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-10 px-6 text-center text-gray-500">
            <p>{t('footer_copyright')}</p>
        </div>
    </footer>
  )
}