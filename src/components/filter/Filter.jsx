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

export default Filter