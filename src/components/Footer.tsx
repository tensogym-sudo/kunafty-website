"use client"

import Link from 'next/link'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'
  
  const contactInfo = {
    phone: "+216 48 028 070",
    address: language === 'en' ? "Tunis, Tunisia" : language === 'fr' ? "Tunis, Tunisie" : "تونس، تونس",
    whatsapp: "+21648028070"
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className={`flex items-center space-x-2 mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              
              <span className="text-xl font-bold">Kunafty</span>
            </div>
            <p className="text-gray-400 mb-4">
              {language === 'en' ? "Authentic Middle Eastern desserts made with love. Experience the rich flavors of traditional kunafa, baklava, and more." : 
               language === 'fr' ? "Desserts moyen-orientaux authentiques faits avec amour. Découvrez les riches saveurs des kunafa, baklava traditionnels et plus." :
               "حلويات شرق أوسطية أصلية محضورة بحب. استمتع بالنكهات الغنية للكنافة والبقلاوة التقليدية والمزيد."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">{t('home')}</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-orange-500 transition-colors">{t('menu')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('contactInfo')}</h3>
            <div className="space-y-2 text-gray-400">
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <MapPin size={16} />
                <span>{contactInfo.address}</span>
              </div>
              <div className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <MessageCircle size={16} />
                <span>{contactInfo.whatsapp}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}