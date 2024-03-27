import Slider from "./Slider";
import {Card1, Card2} from './SectionCard'
import {BsBookmarkStarFill} from "react-icons/bs"
export const SectionOne = () =>{

    return <div className="relative h-full">
    <Slider></Slider>
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>
</div>
}
export default SectionOne;