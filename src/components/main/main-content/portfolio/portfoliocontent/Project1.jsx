import img from '../../../../../imeges/volstiny_production.png'

const Project1 = () => {
   return (
      <section className="project">
         <a href="https://www.artstation.com/artwork/NGPDwb">
            <img src={img} alt="img project 1" />
         </a>
         <div className="content-wrapper">
            <div className="text-wrapper">
               <p className="number">01/</p>
               <div className="text">
                  <p className="title">Маркетплейс</p>
                  <p className="content"><strong>Volstiny production</strong> - маркетплейс для дизайнерського агентства.
                     Потужний
                     і креативний веб-сайт для творців. Унікальний дизайн, безліч анімацій і
                     внутрішній ринок – веб-сайт швидший за Forest Gump і готовий до <strong>SEO</strong>-реклами
                     кампанії
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project1