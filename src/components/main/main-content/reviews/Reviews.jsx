import rev from './reviews.json'
import { motion } from "framer-motion";
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';

const container = {
   hidden: { opacity: 1, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2
      }
   }
};

const item = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1
   }
};


const Revievs = () => {
   return (
      <motion.section
         variants={container}
         initial="hidden"
         animate="visible"
         className="reviews"
         id='reviews'
      >
         <div className='reviews-title'>
            <p>Відгуки</p>
            <div className='line-animation'></div>
         </div>
         <div>
            {rev.map((r, index) => (
               <motion.div
                  variants={item}
                  className={`reviews-wrapper reviews-wrapper-${index + 1}`}
                  key={index}
               >
                  <div className='title'>
                     <p>
                        Відгук
                     </p>
                     <Diversity3RoundedIcon sx={{ color: "azure" }} />
                  </div>
                  <div className='rev-title'>
                     <p>"{r.title}"</p>
                  </div>
                  <div className='data-name'>
                     <div className='text'>
                        {r.client.split(' ').map((word, wordIndex) => (
                           <>
                              {wordIndex === 0 ? <p key={wordIndex}>{word}</p> : ' '}
                              {wordIndex > 0 ? <p>{word}</p> : null}
                           </>
                        ))}
                     </div>
                     <p>{r.data}</p>
                  </div>
                  <div className='line'></div>
                  <div className='sub-title'>
                     <p>Сумарний відгук</p>
                  </div>
                  <div className='text'>
                     <p>{r.text}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </motion.section>
   )
}

export default Revievs