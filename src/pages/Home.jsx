import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return(

    <div className="min-h-screen bg-white">
      
      <Navbar />
      
      <header className="py-10 text-center">
        {/* <h1 className="text-5xl font-extrabold text-orange-600">בית מתנאל</h1> */}
        
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
    


