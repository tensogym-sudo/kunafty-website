"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { language, t } = useLanguage()
  const isRTL = language === 'ar'
  
  const contactInfo = {
    phone: "+216 48 028 070",
    address: language === 'en' ? "Tunis, Tunisia" : language === 'fr' ? "Tunis, Tunisie" : "تونس، تونس",
    whatsapp: "+21648028070",
    mapsUrl: "https://maps.app.goo.gl/5qgVJijGa3VHGZ6M7"
  }

  const openingHours = [
    { day: t('mondayFriday'), hours: "10:00 AM - 8:00 PM" },
    { day: t('saturday'), hours: "11:00 AM - 9:00 PM" },
    { day: t('sunday'), hours: "11:00 AM - 9:00 PM" }
  ]

  const whatsappMessage = t('orderTemplate')

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contactUs')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{t('getInTouch')}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('phone')}</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('whatsapp')}</h3>
                    <p className="text-gray-600">{contactInfo.whatsapp}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={24} />
                  {t('openingHours')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-orange-500 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700">
                    <strong>{t('lastOrders')}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address and Map */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <MapPin className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={24} />
                  {t('ourLocation')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('address')}</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{t('directions')}</strong> {t('directionsText')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{t('findUsOnMap')}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">{contactInfo.address}</p>
                  </div>
                </div>
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MapPin className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={20} />
                  {t('openInMaps')}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-3">{t('readyToOrder')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('orderDescription')}
                  </p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className={`mr-2 ${isRTL ? 'ml-2 mr-0' : ''}`} size={20} />
                    {t('orderOnWhatsApp')}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}