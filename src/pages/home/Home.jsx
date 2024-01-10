import { useEffect, useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FeatureItem from "../../components/featureItem/FeatureItem";
import Header from "../../components/heroSection/HeroSection";
import { choosingData } from "../../data";
import { carTypes } from "../../data";
import { motion } from 'framer-motion';
import './home.scss';

const Home = () => {
  const [active, setActive] = useState(carTypes.categories[0].category);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollLeft -= 302;
    } else {
      current.scrollLeft += 302;
    }
  };

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [])

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

      <div className="typeOfCars">
        <div className="header">
          <h2 className="title">انواع سيارتنا</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar </p>
          <div className="filter">
            { carTypes.categories.map((car) => (
              <div className={ `category_btn ${active === car.category && "active"}` }
                key={ car.id }
                onClick={ () => setActive(car.category) }>
                { car.category }
              </div>
            )) }
          </div>
        </div>
        <div>
          <motion.div className='carousel' ref={ carouselRef }>
            <motion.div className='inner-carousel' drag="x" dragConstraints={ { right: 0, left: -width - 100 } }>
              { carTypes.cars.map((car) => (
                active === car.category &&
                <motion.div className="carName" key={ car.id }>
                  <img src={ car.image } alt={ car.name } />
                  <p>{ car.name }</p>
                </motion.div>
              )) }
            </motion.div>
          </motion.div>
          <div className="icons">
            <ArrowForward className="prev icon"
              onClick={ () => handleScroll("right") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
            <ArrowBack className="next icon"
              onClick={ () => handleScroll("left") }
              sx={{ color: "#111928", fontSize: "52px" }}
            />
          </div>
        </div>
      </div>

    </div>
  )
};

export default Home;