import React, { useState } from 'react';

const Telegrem = () => {
   const [name, setName] = useState('');
   const [nick, setNick] = useState('');
   const [message, setMessage] = useState('');
   const [nameError, setNameError] = useState(false);
   const [nickError, setNickError] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim().length > 0 && nick.trim().length > 0) {
         setName('');
         setNick('');
         setMessage('');
         setNameError(false);
         setNickError(false);
      } else {
         setNameError(name.trim().length === 0);
         setNickError(nick.trim().length === 0);
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
               type="text"
               className={`input v2 ${nickError ? 'error' : ''}`}
               placeholder="Нік в telegram"
               value={nick}
               onChange={(e) => setNick(e.target.value)}
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

export default Telegrem;