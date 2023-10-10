import { useState } from 'react';
import serv from './services.json'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailIcon from '@mui/icons-material/Email';
import ForwardIcon from '@mui/icons-material/Forward';
import NavigationIcon from '@mui/icons-material/Navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Services = () => {
   const [selectedIndex, setSelectedIndex] = useState(null);
   const handleServiceClick = (index) => {
      setSelectedIndex(index);
   };

   return (
      <section className="services" id='services'>
         <div className='services-title'>
            <p>Послуги</p>
         </div>
         <div className='choice'>
            <div className='choice-prodyct'>
               {serv.map((i, index) => (
                  <button
                     key={index}
                     className='prodyct-name'
                     onClick={() => handleServiceClick(index)}
                  >
                     <p>{i.name}</p>
                  </button>
               ))}
            </div>
            <div className='main-choice'>
               <div className='choice-content-wrapper'>
                  {selectedIndex !== null && serv[selectedIndex] ? (
                     <div className='choice-content'>
                        <p className='title'>{serv[selectedIndex].title}</p>
                        {serv[selectedIndex].advantages && (
                           <div>
                              {serv[selectedIndex].advantages.map((advantage, advIndex) => (
                                 <p className='advantage' key={advIndex}><StarOutlineIcon sx={{ color: 'azure', marginRight: "2px" }} />{advantage.text}</p>
                              ))}
                           </div>
                        )}
                        <p className='subtitle'>{serv[selectedIndex].subtitle}</p>
                        <p className='why'><CheckCircleOutlineIcon sx={{ color: 'azure', marginRight: "2px" }} />{serv[selectedIndex].why}</p>
                        <div>
                           {serv[selectedIndex].reason.map((reason, advIndex) => (
                              <p className='reason' key={advIndex}><InfoOutlinedIcon sx={{ color: 'azure', marginRight: "2px" }} />{reason.text}</p>
                           ))}
                        </div>
                        <a href="#">
                           <ForwardIcon sx={{ color: "azure" }} className="arr" />
                           <button className='choice-btn'>Хочу<EmailIcon sx={{ color: "#26262d" }} /></button>
                        </a>
                     </div>
                  ) : (
                     <div className='take-choice'>
                        <NavigationIcon className='arr-top' sx={{ color: "azure" }} />
                        <p>
                           Оберіть послугу
                        </p>
                        <Box sx={{ display: 'flex' }}>
                           <CircularProgress sx={{ color: "azure", marginTop: "20px" }} />
                        </Box>
                     </div>
                  )}
               </div>
               <div className='choice-img'></div>
            </div>
         </div>
      </section>
   )
}

export default Services;
