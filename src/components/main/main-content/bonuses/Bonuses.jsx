import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Bonuses = () => {
   const bonusOptions = [
      "1: Знижка 1%",
      "2: Знижка 2%",
      "3: Знижка 3%",
      "4: Знижка 4%",
      "5: Знижка 5%",
      "6: Реклама 2 тижні",
      "7: Реклама 4 тижні",
      "8: Безкоштовна консультація",
      "9: Безкоштовний дизайн",
      "10: Знижка на друге замовлення 7%",
      "11: Знижка на друге замовлення 10%"
   ];

   const [selectedCard, setSelectedCard] = useState(null);
   const [bonusResult, setBonusResult] = useState("");
   const [buttonDisabled, setButtonDisabled] = useState(false);
   const [countdown, setCountdown] = useState(0);

   useEffect(() => {
      if (countdown > 0) {
         const timer = setTimeout(() => {
            setCountdown(countdown - 1);
         }, 1000);

         return () => {
            clearTimeout(timer);
         };
      } else {
         setButtonDisabled(false);
      }
   }, [countdown]);

   function start() {
      if (!buttonDisabled) {
         const cards_block = document.querySelector('.cards');
         const cards = document.querySelectorAll('.cards > div');
         let random = Math.floor(Math.random() * 9);
         cards.forEach(card => {
            card.style.background = 'none';
            card.style.color = 'black';
         });

         cards_block.style.left = -random * 100 + 'px';

         setTimeout(function () {
            random++;
            cards[random].style.background = 'rgb(88, 98, 102)';
            // cards[random].style.color = 'white';
            setSelectedCard(random);
            setBonusResult(bonusOptions[random]);
            setCountdown(42300);
            setButtonDisabled(true);
         }, 5000);
      }
   }

   return (
      <section className="casino" id='casino'>
         <div className='title'>
            <p>Отримуй бонус</p>
         </div>
         <div className='bonus'>
            <p>Можливі виграші:</p>
            <div className='div'>
               {bonusOptions.map((b, i) => (
                  <p className='choice' key={i}>"{b}"</p>
               ))}
            </div>
         </div>
         <div className="word">
            <p>Крутіть спін та отримуйте:</p>
            <p>{bonusResult}</p>
         </div>
         {
            buttonDisabled && (
               <p className="countdown">
                  Ще спроба через: {Math.floor(countdown / 3600)} часов {Math.floor((countdown % 3600) / 60)} минут {countdown % 60} секунд
               </p>
            )
         }
         <div className='casino-rulet'>
            <div className="shadow">
               <div className="random">
                  <div className="result"></div>
                  <div className="cards">
                     <div>1</div>
                     <div>2</div>
                     <div>3</div>
                     <div>4</div>
                     <div>5</div>
                     <div>6</div>
                     <div>7</div>
                     <div>8</div>
                     <div>9</div>
                     <div>10</div>
                     <div>11</div>
                  </div>
               </div>
            </div>
         </div>
         <Stack direction="row" spacing={2}>
            <Button className="start" variant="contained" color="success" onClick={start} disabled={buttonDisabled}>
               <p>Отримати бонус</p>
            </Button>
         </Stack>
      </section >
   )
}

export default Bonuses;
