
import Header from "../components/home/Header";
import './Home.css';
import FrontPage from "../components/home/FrontPage";
import { SectionFour, SectionOne, SectionThree, SectionTwo } from "../components/home/Sections";

import { Link, Element } from 'react-scroll';
const Home = () =>{
    return <>
    <Header></Header>
    <FrontPage></FrontPage>
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
    </>
}

export default Home;