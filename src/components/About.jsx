import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const intersection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
    }
  }, [intersection]);

  return (
    <div id='about' className="flex  px-14 mt-16 lg:mt-20 min-h-[60vh] w-screen bg-white lg:px-20 ">
      <div
        ref={aboutRef}
        className={`${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition duration-1000 ease-in-out transform w-screen   bg-white rounded-lg `}
      >
    
    <div>
  <p className="lg:text-lg text-[15px] leading-relaxed">
    Welcome to our financial sanctuary! At the core of our pursuits lies an unwavering passion for the art of investing and the science of finance. We specialize in the intricate strategies of investment brokerage, diligently guiding our clients through the complexities of the market to achieve their financial goals.
  </p>
  <p className="lg:text-lg text-[15px] leading-relaxed mt-2">
    With an unwavering commitment to excellence and client satisfaction, we embark on each new endeavor, tirelessly providing support and guidance to our clients in navigating the ever-changing landscape of the financial markets. From portfolio management to investment advisory, we offer tailored solutions that align with our clients' aspirations and risk tolerance.
  </p>
  <p className="hidden lg:block lg:text-lg text-[15px] leading-relaxed mt-2">
    Our journey as investment brokers is defined by innovation and collaboration. We thrive on challenges, turning market insights into actionable strategies through creative problem-solving and cutting-edge technology. With a deep-seated understanding of market dynamics and a vision for sustainable wealth creation, we strive towards a future where investment brokerage harmonizes with economic growth, enriching lives and securing financial futures for generations to come.
  </p>
</div>


      </div>
    </div>
  );
};

export default About;
