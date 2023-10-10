import img from '../../../../../imeges/learnitlive.png'

const Project2 = () => {
   return (
      <section className="project">
         <a href="https://www.learnitlive.com/">
            <img src={img} alt="img project 2" />
         </a>
         <div className="content-wrapper">
            <div className="text-wrapper">
               <p className="number">02/</p>
               <div className="text">
                  <p className="title">Web Розробка</p>
                  <p className="content">
                     <strong>Lernitlive</strong> - веб-сервіс для тренерів і спеціалістів, де вони можуть
                     навчати
                     онлайн. Простими словами - це маркетплейс з додатковим функціоналом для проходження
                     курсів
                     і відвідуванням занять. Ви можете переглянути курси, вибрати свого тренера, відповідно
                     до його
                     оцінок та відгуків. Функціонал: ви можете зареєструватися, купити заняття,
                     поспілкуватися зі своїм тренером

                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project2