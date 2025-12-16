"use client"

import Link from 'next/link'
import { ArrowRight, Star, Heart, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { language, t } = useLanguage()
  const whatsappNumber = "+21648028070"
  const whatsappMessage = t('orderTemplate')
  const isRTL = language === 'ar'

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
           
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('heroTitle')}
              <span className="text-orange-500 block">{t('heroSubtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('heroDescription')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link 
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                {t('viewMenu')}
                <ArrowRight className={`ml-2 ${isRTL ? 'rotate-180' : ''}`} size={20} />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={20} />
                {t('orderWhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('authenticRecipes')}</h3>
              <p className="text-gray-600">
                {t('authenticDescription')}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('madeWithLove')}</h3>
              <p className="text-gray-600">
                {t('loveDescription')}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('freshDaily')}</h3>
              <p className="text-gray-600">
                {t('freshDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('readyToIndulge')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={20} />
              {t('orderNowWhatsApp')}
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              {t('visitUs')}
              <ArrowRight className={`ml-2 ${isRTL ? 'rotate-180' : ''}`} size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}