import FeatureItem from "../../components/featureItem/FeatureItem";
import Header from "../../components/heroSection/HeroSection";
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="features">
        <h2 className="title">لماذا تختارنا</h2>
        <div className="items">
          <FeatureItem className="item"
            icon="no_fees-icon.svg"
            iconName="No extra fees"
            title="لا يوجد تكاليف اضافية"
            description="نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات "
            width={ "279px" }
            color="#8D9094"
          />
          <FeatureItem className="item"
            icon="calender-icon.svg"
            iconName="Punctuality"
            title="التزام بالمواعيد"
            description="نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات "
            width={ "279px" }
            color="#8D9094" />
          <FeatureItem className="item"
            icon="right-icon.svg"
            iconName="easily"
            title="سهوله"
            description="نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات "
            width={ "279px" }
            color="#8D9094"
          />
          <FeatureItem className="item"
            icon="day-icon.svg"
            iconName="free cancellation"
            title="الغاء مجانى"
            description="نهتم بتقديم افضل خدمة من حيث المستوى والخبرة في تقديم الخدمات "
            width={ "279px" }
            color="#8D9094"
          />
        </div>
      </div>
    </div>
  )
};

export default Home;