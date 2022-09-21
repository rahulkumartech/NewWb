import Whyshop from "./MinComp/whyshop";
import Newarrivals from "./MinComp/NewArrivals";
import Minhader from "./MinComp/MinHader";
const About = () => {
  return (
    <div className="Abouts">
      <Minhader name={"About Us"} />
      <Whyshop />
      <Newarrivals />
    </div>
  );
};

export default About;
