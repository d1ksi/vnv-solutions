import React, { useState } from 'react';
import faq from './faq.json'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const FAQ = () => {
   const [activeIndexes, setActiveIndexes] = useState([]);

   const handleToggle = (index) => {
      if (activeIndexes.includes(index)) {
         setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
         setActiveIndexes([...activeIndexes, index]);
      }
   };

   return (
      <section className="faq" id='faq' >
         <p className='title'>FAQ</p>
         <div className='faq-card-wrapper'>
            {faq.map((q, i) => (
               <div className='faq-card' key={i}>
                  <div className='faq-title-button'>
                     <p>{q.title}</p>
                     <button
                        className={`button ${activeIndexes.includes(i) ? 'active' : ''}`}
                        onClick={() => handleToggle(i)}
                     >
                        <KeyboardDoubleArrowDownIcon sx={{ color: "azure" }} />
                     </button>
                  </div>
                  <div className={`text-wrapper ${activeIndexes.includes(i) ? 'active' : ''}`}>
                     <p className="text">{q.text}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default FAQ