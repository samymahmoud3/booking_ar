import './carCategory.scss'

const CarCategory = ({ category, select }) => {
  return (
    <div className={ `boxCategory ${select}` } onClick={ () => select(category) }>
      <p>{ category }</p>
      <div>
        <img className='car' src="/car.jpg" alt="car" />
        <div className="details">
          <p>د.إ 145</p>
          <p>4x 3x</p>
        </div>
      </div>
    </div>
  )
};

export default CarCategory