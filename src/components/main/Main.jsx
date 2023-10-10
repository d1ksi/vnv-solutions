import Acquiantance from "./main-content/Acquaintance"
import FirstOrder from "./main-content/firstorder/FirstOrder"
import Services from "./main-content/services/Services"
import WhyDoWe from "./main-content/whydowe/WhyDoWe"
import Contact from "./main-content/contact/Contact"
import PortfolioSlider from "./main-content/portfolio/PortfolioSlider"
import FAQ from "./main-content/faq/FAQ"
import Revievs from "./main-content/reviews/Reviews"
import Bonuses from "./main-content/bonuses/Bonuses"

const Main = () => {
   return (
      <main>
         <Acquiantance />
         <WhyDoWe />
         <Services />
         <FirstOrder />
         <Contact />
         <PortfolioSlider />
         <FAQ />
         <Revievs />
         <Bonuses />
      </main >
   )
}

export default Main