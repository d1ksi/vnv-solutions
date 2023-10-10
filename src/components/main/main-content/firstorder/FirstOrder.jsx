import { useState } from 'react'
import discount from './first-order.json'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FirstOrder = () => {
   const [activeIndexes, setActiveIndexes] = useState([]);

   const toggleTextVisibility = (index) => {
      if (activeIndexes.includes(index)) {
         setActiveIndexes(activeIndexes.filter(item => item !== index)); // Убираем класс, если он уже был активирован
      } else {
         setActiveIndexes([...activeIndexes, index]);
      }
   }

   return (
      <section className="first-order" id='first-order'>
         <p className='first-order-title' id='first-order'>Перше замовлення</p>
         <div>
            {discount.map((item, index) => (
               <div className='dicount-wrapper' key={index}>
                  <div className={`discount-card ${activeIndexes.includes(index) ? 'active' : ''}`}>
                     <div className='discount-title-wrapper'>
                        <p className='discount-title'>{item.title}</p>
                     </div>
                     <p className={`discount-text ${activeIndexes.includes(index) ? 'active' : ''}`}>{item.text}</p>
                     <div className='button-wrapper'>
                        <button onClick={() => toggleTextVisibility(index)}>Детальніше<ArrowDownwardIcon className='discoun-btn' /></button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default FirstOrder;