import React, { useState } from 'react';
import Telegrem from './field/Telegram';
import Viber from './field/Viber';
import Mail from './field/Mail';
import WhatsApp from './field/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import tiktok from '../../../../imeges/tiktok.png';
import WhatsAppIcon from './WhatsAppIcon';
import MailIcon from '@mui/icons-material/Mail';
import ViberIcon from './ViberIcon';

const Contact = () => {
   const field = [
      <Telegrem />,
      <Viber />,
      <Mail />,
      <WhatsApp />,
   ];

   const choice = [
      <TelegramIcon sx={{ color: "white" }} />,
      <ViberIcon />,
      <MailIcon sx={{ color: "white" }} />,
      <WhatsAppIcon />,
   ];

   const [selectedIconIndex, setSelectedIconIndex] = useState(null);

   const handleIconClick = (index) => {
      setSelectedIconIndex(index);
   };

   return (
      <section className='contact-wrapper' id='contact'>
         <div className='contact-title'>
            <p>Зв'яжіться з нами</p>
            <div></div>
         </div>
         <div className='cont-wrap'>
            <section className="contact">
               <div className='choice-icon'>
                  {choice.map((icon, index) => (
                     <div
                        className={`choice-icon-wrapper ${selectedIconIndex === index ? 'selected' : ''
                           }`}
                        onClick={() => handleIconClick(index)}
                        key={index}
                     >
                        {icon}
                     </div>
                  ))}
               </div>
               <p>Оберіть спосіб зв'язку</p>
               {selectedIconIndex !== null ? field[selectedIconIndex] : <Mail />}
            </section>
            <section className='social-media'>
               <div className='social-media-box'>
                  <a href="mailto:team@vnv.solutions">team@vnv.solutions</a>
                  <div className='social-media-div'></div>
                  <div className='adress'>
                     <p>Карла Мікльоша, 7</p>
                     <p>Львів, Україна</p>
                  </div>
               </div>
               <div className='social-media-wrapper'>
                  <p>Наші соціальні мережі</p>
                  <div className='social' id='social'>
                     <div>
                        <a href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"><FacebookIcon /></a>
                     </div>
                     <div>
                        <a href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"><img src={tiktok} alt="tiktok icon" width="20px" height="20px" /></a>
                     </div>
                     <div>
                        <a href="https://www.linkedin.com/company/vnv-tech/"><LinkedInIcon /></a>
                     </div>
                     <div>
                        <a href="https://t.me/vnv_solutions"><TelegramIcon /></a>
                     </div>
                     <div>
                        <a href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"><InstagramIcon /></a>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </section>
   );
};

export default Contact;
