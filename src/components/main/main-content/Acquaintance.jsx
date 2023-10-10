import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import OrderButton from './allButton/OrderButton';

const Acquaintance = () => {
   const mainRef = useRef(null);
   const compRef = useRef(null);
   const [currentText, setCurrentText] = useState('');
   const [startTyping, setStartTyping] = useState(false);
   const [showOrderButton, setShowOrderButton] = useState(false);
   const TypeAndRemoveTextSpeed = 100;

   useEffect(() => {
      const vantaEffect = NET({
         el: mainRef.current,
         mouseControls: true,
         touchControls: true,
         gyroControls: false,
         minHeight: 200.00,
         minWidth: 200.00,
         scale: 0.30,
         scaleMobile: 1.00,
         color: 0x778898,
         backgroundColor: 0x26262d,
         points: 14.00,
         maxDistance: 20.00,
         spacing: 20.00,
      });

      const fullText = 'IT розробка';

      let charIndex = 0;
      let intervalId;

      function typeText() {
         if (charIndex <= fullText.length) {
            setCurrentText(fullText.substring(0, charIndex));
            charIndex++;
         } else {
            clearInterval(intervalId);
            setTimeout(() => {
               setShowOrderButton(true);
            }, 500);
         }
      }
      if (startTyping) {
         intervalId = setInterval(typeText, TypeAndRemoveTextSpeed);
      } else {
         setCurrentText('');
      }

      return () => {
         clearInterval(intervalId);
         if (vantaEffect) vantaEffect.destroy();
      };
   }, [startTyping]);

   useEffect(() => {
      setTimeout(() => {
         setStartTyping(true);
      }, 4000);

   }, []);

   return (
      <section className="acquiantance" ref={mainRef} id='acquiantance'>
         <div className='text'>
            <p>Easy, quality, IT -<br />
               <span className="bold-first-letter">w</span>inning <strong>solutions</strong><br />
               for your business</p>
            <div className='wrapper-text'>
               <p>/</p>
               <p className='comp' ref={compRef}>
                  <span className="typed-text">{currentText}</span>
               </p>
            </div>
         </div>
         {showOrderButton && <OrderButton />}
      </section>
   )
}

export default Acquaintance;