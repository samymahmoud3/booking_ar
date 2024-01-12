import { useRef, useState } from "react";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import FeatureItem from "../../components/featureItem/FeatureItem";
import Header from "../../components/heroSection/HeroSection";
import { choosingData, reviews } from "../../data";
import { carTypes } from "../../data";
import Filter from "../../components/filter/Filter";
import './home.scss';

const Home = () => {
  const [active, setActive] = useState(carTypes.categories[0].category);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  const handleScroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollLeft -= 302;
    } else {
      current.scrollLeft += 302;
    }
  };

  const handleScrollReviews = (direction) => {
    const { current } = carouselRef2;
    if (direction === "left") {
      current.scrollLeft -= 302;
    } else {
      current.scrollLeft += 302;
    }
  };

  return (
    <div className="home">
      <Header />

      <div className="features">
        <h2 className="title">لماذا تختارنا</h2>
        <div className="items">
          { choosingData.map((item, index) => (
            <FeatureItem className="item" key={ index }
              icon={ item.icon }
              iconName={ item.iconName }
              title={ item.title }
              description={ item.description }
              width={ "279px" }
              color="#8D9094"
            />
          )) }
        </div>
      </div>

      <section className="typeOfCars carousel_section">
        <Filter
          categories={ carTypes.categories }
          active={ active }
          setActive={ setActive }
          title="انواع سيارتنا"
          paragraph="تختارنا السيارات الأفضل لكل مشروعك"
          show={ true }
        />
        <div>
          <div className='carousel' ref={ carouselRef } style={ { width: "89%" } }>
            <div className='inner-carousel' >
              { carTypes.cars.map((car) => (
                active === car.category &&
                <div className="item" key={ car.id }>
                  <img src={ car.image } alt={ car.name } />
                  <p>{ car.name }</p>
                </div>
              )) }
            </div>
          </div>
          <div className="icons">
            <ArrowForward className="next icon"
              onClick={ () => handleScroll("left") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
            <ArrowBack className="prev icon"
              onClick={ () => handleScroll("right") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
          </div>
        </div>
      </section>

      <section className="reviews carousel_section">
        <Filter
          categories={ carTypes.categories }
          active={ active }
          setActive={ setActive }
          title="تقييمات العملاء"
          paragraph="تقييمات العملاء عن السيارات التي قدمناه"
          show={ false }
        />
        <div>
          <div  className='carousel' ref={ carouselRef2 } style={ { width: "79%" } }>
            <div style={{padding:"30px 10px "}} className='inner-carousel'>
              { reviews.map((review) => (
                <div className="item" key={ review.id }>
                  <img className="quotes" src="/quotes_icon.svg" alt="quotes_icon" />
                  <div className="avatar">
                    <img src={ review.avatar } alt={ review.name } />
                    <h2>{ review.name }</h2>
                  </div>
                  <p className="comment">{ review.description }</p>
                  <div className="star_icons">
                    <Star className="icon" sx={{ color: "#FFD231", fontSize: "20px" }} />
                    <Star className="icon" sx={{ color: "#FFD231", fontSize: "20px" }} />
                    <Star className="icon" sx={{ color: "#FFD231", fontSize: "20px" }} />
                    <Star className="icon" sx={{ color: "#FFD231", fontSize: "20px" }} />
                    <Star className="icon" sx={{ color: "#FFD231", fontSize: "20px" }} />
                  </div>
                </div>
              )) }
            </div>
          </div>
          <div className="icons">
            <ArrowForward className="next icon"
              onClick={ () => handleScrollReviews("left") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
            <ArrowBack className="prev icon"
              onClick={ () => handleScrollReviews("right") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
          </div>
        </div>
      </section>

    </div>
  )
};

export default Home;