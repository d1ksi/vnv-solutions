import React, { useState } from 'react'
import Project1 from './portfoliocontent/Project1'
import Project2 from './portfoliocontent/Project2'
import Project3 from './portfoliocontent/Project3'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import OrderButtonV2 from '../allButton/buttonV2/OrderButtonV2'


const PortfolioSlider = () => {
   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

   const projects = [
      <Project1 />,
      <Project2 />,
      <Project3 />
   ]
   const goToPreviousProject = () => {
      setCurrentProjectIndex((prevIndex) =>
         prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
   };
   const goToNextProject = () => {
      setCurrentProjectIndex((prevIndex) =>
         prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
   };

   return (
      <section className="portfolio" id="portfolio">
         <p className='title-port'>Портфоліо</p>
         <div className='project-slider'>{projects[currentProjectIndex]}</div>
         <div className='button-project'>
            <button onClick={goToPreviousProject}><ArrowCircleLeftRoundedIcon /></button>
            <button onClick={goToNextProject}><ArrowCircleRightRoundedIcon /></button>
         </div>
         <OrderButtonV2 label="Хочу вже!" />
      </section>
   )
}

export default PortfolioSlider