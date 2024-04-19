import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Career = () => {
  const handleApplyNow = () => {
    window.location.href = 'mailto:charleskelvin883@gmail.com';
  };

  return (
    <div className='w-screen  '>
<Navbar />
    <div className="bg-gray-100 min-h-screen mt-20 flex flex-col items-center justify-center">
        <div>
            <img src="/job.jpg" alt="" className='max-w-lg h-full ' />
        </div>
      <div className="max-w-screen bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Cruise Ship Career Opportunities</h1>
        <p className="text-gray-700 mb-6">
          We're always looking for talented individuals to join our cruise ship team. If you're passionate
          about working on the high seas and think you'd be a good fit, we'd love to hear from you!
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleApplyNow}
          >
          Mail Us To Know More
        </button>
      </div>
      
    </div>
    <Footer/>
            </div>
  );
};

export default Career;
