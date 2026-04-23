import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return(

    <div className="min-h-screen bg-white">
      
      <Navbar />
      
      <header className="relative text-center">
      
        <img src='src/photos/header.png' className="w-full h-auto"></img>

        <div className="absolute inset-0 flex flex-col justify-center items-center pb-43">
          <h1 className="text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">מצילים,מטפלים ומאמצים חיות מחמד בישראל</h1>
          <p className="mt-3 text-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">עמותת בית מתנאל מחלצת ומשקמת חיות מחמד במצוקה ומוצאת להם בתים אוהבים</p>
          <a href="/adpot_form" 
              className="mt-3 bg-white text-yellow-500 px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold shadow-md hover:bg-yellow-100 transition-all duration-300 whitespace-nowrap text-xs md:text-base">אני רוצה לאמץ</a>

          <a href="/report" 
              className="mt-3 bg-red-700 text-yellow-500 px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold shadow-md hover:bg-red-800 transition-all duration-300 whitespace-nowrap text-xs md:text-base">דווח על חיה במצוקה⚠️</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        
        {/* <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
          <h2 className="text-2xl font-bold mb-4">הארנבים שלנו</h2>
          <p>בקרוב כאן... גלריית הארנבים המחכים לבית!</p>
        </div> */}
        
      </main>

    </div>
  );
};

export default Home;
    


