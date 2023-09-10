import Slider from "./Slider";

const FrontPage = () =>{

    return <div className="relative h-screen">
    <Slider></Slider>
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>
</div>
}
export default FrontPage;