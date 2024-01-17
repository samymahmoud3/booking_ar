import PropTypes from 'prop-types';
import './carCategory.scss'

const CarCategory = (prop) => {
  return (
    <div className={ `boxCategory ${prop.select}` } >
      <p>{ prop.category }</p>
      <div>
        <img className='car' src="/car.jpg" alt="car" />
        <div className="num">
          <div>د.إ 145</div>
          <div>4x 3x</div>
        </div>
      </div>
    </div>
  )
};
CarCategory.prototype = {
  prop: PropTypes.node
}

export default CarCategory