"use client"

import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { useState } from "react"

export default function LanguageSelect() {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "tr", name: "Türkçe" }
  ]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (langCode) => {
    changeLocale(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left w-max">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {languages.find(lang => lang.code === locale)?.name}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}