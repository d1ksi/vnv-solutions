import TypingText from '../../../function/TypingText';
import text from './whydowe.json'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import goodImg from '../../../../imeges/good.png'
import OrderButtonV2 from '../allButton/buttonV2/OrderButtonV2';

const WhyDoWe = () => {

   const allIcon = [
      <AttachMoneyIcon />,
      <CodeIcon />,
      <LayersIcon />,
      <CheckCircleOutlineIcon />,
      <LightbulbIcon />,
      <FavoriteIcon />
   ]

   return (
      <section className="why-we" id='why-we'>
         <div className='why-wrapper'>
            <div className='wrapper-text1'>
               <p>/</p>
               <p className='comp'>
                  <TypingText fullText="Чому ми?" />
               </p>
            </div>
            <div className='wrapper-text2'>
               <p className='ideas'>
                  Ваші<br />
                  <span className='light'>IT</span> ідеї<br />
                  в надійних руках
               </p>
            </div>
            <div className='wrapper-json'>
               {allIcon.map((icon, index) => (
                  <div className='json' key={index}>
                     <div className='json-titile-wrapper'>
                        <div className='json-titile'>
                           <img src={goodImg} alt="animation img" />
                           <div className='icon'>{icon}</div>
                        </div>
                     </div>
                     <p className='json-text'>{text[index].text}</p>
                  </div>
               ))}
            </div>
            <OrderButtonV2 label="Замовити" />
         </div>
      </section>
   )
}

export default WhyDoWe