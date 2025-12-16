"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Menu() {
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'
  
  const menuCategories = [
    {
      title: language === 'en' ? "Baklava ösp oğula" : language === 'fr' ? "Baklava ösp oğula" : "بقلاوة أوص أوغولا",
      items: [
        { name: language === 'en' ? "Role Armandé" : language === 'fr' ? "Role Armandé" : "رول أرماندي", price: "2.500 TND" },
        { name: language === 'en' ? "Baklava Pistache" : language === 'fr' ? "Baklava Pistache" : "بقلاوة فستق", price: "2.500 TND" },
        { name: language === 'en' ? "Baklava Noix" : language === 'fr' ? "Baklava Noix" : "بقلاوة جوز", price: "2.500 TND" },
        { name: language === 'en' ? "Baklava Amande" : language === 'fr' ? "Baklava Amande" : "بقلاوة لوز", price: "2.500 TND" },
        { name: language === 'en' ? "Baklava Chocolat" : language === 'fr' ? "Baklava Chocolat" : "بقلاوة شوكولاتة", price: "2.500 TND" }
      ]
    },
    {
      title: language === 'en' ? "Kunafa çöts" : language === 'fr' ? "Kunafa çöts" : "كنافة تشوتس",
      items: [
        { name: language === 'en' ? "Kunafa Classique" : language === 'fr' ? "Kunafa Classique" : "كنافة كلاسيك", price: "3.500 TND" },
        { name: language === 'en' ? "Kunafa Pistache" : language === 'fr' ? "Kunafa Pistache" : "كنافة فستق", price: "4.000 TND" },
        { name: language === 'en' ? "Kunafa Chocolat" : language === 'fr' ? "Kunafa Chocolat" : "كنافة شوكولاتة", price: "3.500 TND" },
        { name: language === 'en' ? "Kunafa Noix" : language === 'fr' ? "Kunafa Noix" : "كنافة جوز", price: "4.000 TND" },
        { name: language === 'en' ? "Kunafa Crème" : language === 'fr' ? "Kunafa Crème" : "كنافة كريمة", price: "3.500 TND" }
      ]
    },
    {
      title: language === 'en' ? "Chocolate Rush" : language === 'fr' ? "Chocolate Rush" : "هوسة الشوكولاتة",
      items: [
        { name: language === 'en' ? "Brownie Kunafa" : language === 'fr' ? "Brownie Kunafa" : "براوني كنافة", price: "3.000 TND" },
        { name: language === 'en' ? "Chocolat Fondant" : language === 'fr' ? "Chocolat Fondant" : "شوكولاتة فوندان", price: "2.500 TND" },
        { name: language === 'en' ? "Mousse Chocolat" : language === 'fr' ? "Mousse Chocolat" : "موس شوكولاتة", price: "2.000 TND" },
        { name: language === 'en' ? "Éclair Chocolat" : language === 'fr' ? "Éclair Chocolat" : "إكلير شوكولاتة", price: "1.500 TND" },
        { name: language === 'en' ? "Tarte Chocolat" : language === 'fr' ? "Tarte Chocolat" : "ترت شوكولاتة", price: "2.500 TND" }
      ]
    },
    {
      title: language === 'en' ? "Specialités Orientales" : language === 'fr' ? "Specialités Orientales" : "تخصصات شرقية",
      items: [
        { name: language === 'en' ? "Mhalabia" : language === 'fr' ? "Mhalabia" : "مهلبية", price: "1.500 TND" },
        { name: language === 'en' ? "Riz au Lait" : language === 'fr' ? "Riz au Lait" : "أرز بالحليب", price: "1.500 TND" },
        { name: language === 'en' ? "Aassida" : language === 'fr' ? "Aassida" : "عصيدة", price: "2.000 TND" },
        { name: language === 'en' ? "Zlabia" : language === 'fr' ? "Zlabia" : "زلابية", price: "1.000 TND" },
        { name: language === 'en' ? "Qatayef" : language === 'fr' ? "Qatayef" : "قطايف", price: "2.500 TND" }
      ]
    }
  ]

  const supplements = [
    { name: language === 'en' ? "Cream" : language === 'fr' ? "Crème" : "كريمة", price: "0.500 TND" },
    { name: language === 'en' ? "Chocolate" : language === 'fr' ? "Chocolat" : "شوكولاتة", price: "0.500 TND" },
    { name: language === 'en' ? "Pistache" : language === 'fr' ? "Pistache" : "فستق", price: "1.000 TND" },
    { name: language === 'en' ? "Noix" : language === 'fr' ? "Noix" : "جوز", price: "1.000 TND" },
    { name: language === 'en' ? "Amande" : language === 'fr' ? "Amande" : "لوز", price: "1.000 TND" }
  ]

  const whatsappNumber = "+21648028070"
  const whatsappMessage = t('orderTemplate')

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="py-20 bg-gray-50 scroll-smooth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('ourMenu')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('menuDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover-lift transition-all-300">
              <CardHeader className="bg-orange-500 text-white transition-all-300 hover:bg-orange-600">
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-gray-800 font-medium">{item.name}</span>
                      <span className="text-orange-500 font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg hover-lift transition-all-300">
          <CardHeader className="bg-amber-500 text-white transition-all-300 hover:bg-amber-600">
            <CardTitle className="text-2xl">{t('supplements')}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supplements.map((supplement, index) => (
                <div key={index} className={`flex justify-between items-center py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-800 font-medium">{supplement.name}</span>
                  <span className="text-amber-500 font-semibold">{supplement.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t('allPrices')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all-300 hover-lift"
            >
              <MessageCircle className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={20} />
              {t('orderWhatsApp')}
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all-300 hover-lift"
            >
              {t('visitOurShop')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}