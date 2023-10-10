import React, { useEffect, useState } from 'react';

const TypingText = ({ fullText }) => {
   const [currentText, setCurrentText] = useState('');
   const TypeAndRemoveTextSpeed = 100;
   useEffect(() => {
      let charIndex = 0;
      let intervalId;
      function typeText() {
         if (charIndex <= fullText.length) {
            setCurrentText(fullText.substring(0, charIndex));
            charIndex++;
         } else {
            clearInterval(intervalId);
         }
      }
      intervalId = setInterval(typeText, TypeAndRemoveTextSpeed);
      return () => {
         clearInterval(intervalId);
      };
   }, [fullText]);

   return <span className="typed-text">{currentText}</span>;
};

export default TypingText;
