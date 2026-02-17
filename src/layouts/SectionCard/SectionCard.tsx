import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTranslation } from "@/contexts/TranslationContext";
import './SectionCard.css'

export default function SectionCard() {
  const { t } = useTranslation();
  return (
    <>




<section id="services" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 accent-border inline-block">{t('section_expertise')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">



    <Card className="rounded-lg mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-code text-sky-400 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_web_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_web_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>


 
  

    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-brain text-rose-500 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_ai_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_ai_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>




  <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-chart-line text-emerald-400 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_erp_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_erp_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>





      <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-server text-amber-400 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_server_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_server_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>





      <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-gears text-indigo-400 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_custom_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_custom_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>


  
      <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <div className="fa-solid fa-mobile text-purple-400 text-3xl mb-4"></div>
        </CardTitle>
        <CardDescription>
          {t('service_mobile_title')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p >
          {t('service_mobile_desc')}
        </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>


  

</div>
        
    </section>


    

      




    </>
  )
}
