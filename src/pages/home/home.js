import Intro from '../../components/intro/intro';
import Suggested from '../../components/suggestedLocation/suggestedLocation';
import TripInfo from '../../components/tripInfo/tripInfo';

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <TripInfo />
      <Suggested />
    </div>
  );
};

export default Home;
