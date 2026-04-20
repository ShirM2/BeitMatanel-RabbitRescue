import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-[#F0EAD4] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-9xl mx-auto px-6 py-4 flex items-center relative">
        {/* לוגו האתר */}
        <div className="flex-1 flex items-center gap-3">
          <img src="/src/photos/logo.png" alt="לוגו" className="h-25 w-25" />
          <div className="text-xl font-bold text-[#E8A36A]">בית מתנאל</div>
        </div>

        {/* קישורי ניווט */}
        <div className="flex-1 flex gap-10 justify-center">
          <a href="/" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">דף הבית</a>
          <a href="/animals" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">החיות שלנו</a>
          <a href="/report" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">דווח על חיה במצוקה</a>
          <a href="/donations" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">תרומות</a>
          <a href="/about" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">אודות</a>
          <a href="/contact" className="whitespace-nowrap text-gray-700 hover:text-orange-300 font-medium transition-colors">צור קשר</a>
        </div>

        {/* קישור לאימוץ */}
        <div className="flex-1 flex justify-center">
           <a href="/adpot_form" 
              className="bg-[#E8A36A] text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-[#d48e55] transition-all duration-300 whitespace-nowrap">אני רוצה לאמץ</a>
        </div>
      </div>
    </nav>
  )
}
