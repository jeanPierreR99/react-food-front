import Slider from "./Slider";
export const SectionOne = () =>{

    return <div className="relative h-full">
    <Slider></Slider>
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>
</div>
}
export default SectionOne;