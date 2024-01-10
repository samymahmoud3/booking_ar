import './carCategory.scss'

const CarCategory = ({ category, select }) => {
  return (
    <div className={ `boxCategory ${select}` } >
      <p>{ category }</p>
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

export default CarCategory