import img from '../../../../../imeges/iren.png'



const Project3 = () => {
   return (
      <section className="project">
         <a href="https://irenbanquethall.com/">
            <img src={img} alt="img project 3" />
         </a>
         <div className="content-wrapper">
            <div className="text-wrapper">
               <p className="number">03/</p>
               <div className="text">
                  <p className="title">Сервіс доставки</p>
                  <p className="content">Банкетний зал Ірен - служба доставки смачної їжі від Ірен. З
                     можливістю зареєструватися, замовити та оплатити прямо на сайті!
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project3