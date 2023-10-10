import React, { useState } from 'react';

const WhatsApp = () => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
   const [nameError, setNameError] = useState(false);
   const [phoneError, setPhoneError] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim().length > 0 && phone.trim().length > 0) {
         setName('');
         setPhone('');
         setMessage('');
         setNameError(false);
         setPhoneError(false);
      } else {
         setNameError(name.trim().length === 0);
         setPhoneError(phone.trim().length === 0);
      }
   };

   return (
      <section className="input-all-wrapper">
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               className={`input ${nameError ? 'error' : ''}`}
               placeholder="Імʼя"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <p><strong>*</strong>Поле обов'язкове до заповнення</p>
            <input
               type="number"
               className={`input v2 ${phoneError ? 'error' : ''}`}
               placeholder="Номер телефону"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
            <p><strong>*</strong>Поле обов'язкове до заповнення</p>
            <textarea
               placeholder="Повідомлення"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Відправити</button>
         </form>
      </section>
   );
};

export default WhatsApp;
