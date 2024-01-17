import PropTypes from 'prop-types';
import './filter.scss';

const Filter = ({title, paragraph, categories, setActive, active, show  }) => {
  return (
    <div className="filter_container">
          <h2 className="title"> { title } </h2>
      <p> { paragraph } </p>
      { show &&
        <div className="filter_btns">
          { categories.map((car) => (
            <div className={ `category_btn ${active === car.category && "active_btn"}` }
              key={ car.id }
              onClick={ () => setActive(car.category) }>
              { car.category }
            </div>
          )) }
        </div>
      }
    </div>
  )
}

Filter.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string
  })),
  setActive: PropTypes.func,
  active: PropTypes.string,
  show: PropTypes.bool
}

export default Filter