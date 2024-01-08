import FeatureItem from "../../components/featureItem/FeatureItem";
import Header from "../../components/heroSection/HeroSection";
import { choosingData } from "../../data";
import './home.scss';

const Home = () => {
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

    </div>
  )
};

export default Home;