import React, { useState } from "react";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';



const MenuMobile = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div className={`header__container ${isOpen ? "open" : ""}`}>
         <button className='burger-btn' id='burger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
         </button>
         <nav className="menu" id='menu'>
            <ul className="menu__list">
               <div className='company__name'>
                  <p className='text'>Liubomyr Luznyi</p>
               </div>
               <li className="menu__item">
                  <a href="#" className="menu__link">Головна<HomeTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#why-we" className="menu__link">Чому ми!<HandshakeTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#services" className="menu__link">Послуги<DevicesTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#first-order" className="menu__link">Перше замовлення<RedeemTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#contact" className="menu__link">Зв'яжіться з нами<SupportAgentTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#portfolio" className="menu__link">Наші проєкти<BusinessCenterTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#faq" className="menu__link">FAQ<QuizTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#contact" className="menu__link">Соціальні мережі<ShareTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#reviews" className="menu__link">Відгуки<ThumbUpOffAltTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
               <li className="menu__item">
                  <a href="#casino" className="menu__link">Акції<SavingsTwoToneIcon sx={{ color: '#778898', marginLeft: '5px' }} /></a>
               </li>
            </ul>
            <div className='social__media'>
               <a href="https://www.facebook.com/profile.php?id=100088433736254" className='wrapper__media'><FacebookIcon sx={{ color: '#3b5998' }} /></a>
               <a href="https://www.linkedin.com/company/vnv-tech/" className='wrapper__media'><LinkedInIcon sx={{ color: '#3b5998' }} /></a>
               <a href="https://t.me/vnv_solutions" className='wrapper__media'><TelegramIcon /></a>
            </div>
         </nav>
      </div>
   )
}

export default MenuMobile