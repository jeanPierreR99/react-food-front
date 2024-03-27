import Header from "../components/home/Header";
import {SectionOne} from "../components/home/SectionOne";
import {SectionTwo} from "../components/home/SectionTwo";
import {SectionThree} from "../components/home/SectionThree";
import {SectionFour} from "../components/home/SectionFour";
import {SectionFive} from "../components/home/SectionFive";
import "./Home.css";
import { Element } from "react-scroll";
import LuzCursor from "../components/LuzCursor";
const Home = () => {
  return (
    <>
      <Header></Header>
      <Element name="sectionOne">
        <SectionOne></SectionOne>
      </Element>
      <Element name="sectionTwo">
        <SectionTwo></SectionTwo>
      </Element>
      <Element name="sectionThree">
        <SectionThree></SectionThree>
      </Element>
      <Element name="sectionFour">
      <SectionFour></SectionFour>
      </Element>
      <Element name="sectionFive">
        <SectionFive></SectionFive>
      </Element>
      <LuzCursor></LuzCursor>
    </>
  );
};

export default Home;
