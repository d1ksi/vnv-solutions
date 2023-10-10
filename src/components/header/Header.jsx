import Logo from '../../imeges/vnv_logo.png'
import MenuDesktop from './header-components/MenuDesktop';
import MenuMobile from './header-components/MenuMobile';

const Header = () => {


   return (
      <header>
         <div className='logo'>
            <img src={Logo} alt="logo" />
            <p>Liubomyr Luznyi</p>
         </div>
         <div className='all-menu'>
            <MenuDesktop />
            <MenuMobile />
         </div>
      </header>
   );
};

export default Header;
