import AboutSection from "./AboutSection/AboutSection";
import Campaign from "./Campaign/Campaign";
import Hero from "./Hero/Hero";
import Impact from "./Impact/Impact";
import { useLoaderData } from "react-router";
const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div className="">
            <Hero></Hero>

            <AboutSection></AboutSection>
            <Impact></Impact>

            <Campaign data={data.campaigns}></Campaign>
        </div>
    );
};

export default Home;