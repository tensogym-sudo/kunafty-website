"use client"

import { useState } from 'react'
import { Menu, X, Phone, MapPin, Clock, Globe } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' }
  ]

  const isRTL = language === 'ar'

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all-300">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link href="/" className={`flex items-center space-x-2 hover-lift ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            
            <span className="text-xl font-bold text-gray-900">Kunafty</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{t('home')}</Link>
            <Link href="/menu" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{t('menu')}</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{t('contact')}</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors">
                <Globe size={16} />
                <span className="text-sm font-medium">{languages.find(l => l.code === language)?.flag}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'en' | 'fr' | 'ar')}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'bg-orange-50 text-orange-500' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-all-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all-300 ${isRTL ? 'text-right' : ''}`}>
            <nav className={`flex flex-col space-y-3 ${isRTL ? 'items-end' : ''}`}>
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors py-2 font-medium">{t('home')}</Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-500 transition-colors py-2 font-medium">{t('menu')}</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors py-2 font-medium">{t('contact')}</Link>
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t">
                <div className="flex space-x-2 justify-center">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'en' | 'fr' | 'ar')}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        language === lang.code 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}