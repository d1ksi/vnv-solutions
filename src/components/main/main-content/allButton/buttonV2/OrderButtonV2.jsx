import './order-btn.scss'
import PropTypes from 'prop-types';

const OrderButtonV2 = ({ label }) => {
   return (
      <a href="#" className="animated-button1">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         {label}
      </a>
   )
}

OrderButtonV2.propTypes = {
   label: PropTypes.string.isRequired,
}

export default OrderButtonV2