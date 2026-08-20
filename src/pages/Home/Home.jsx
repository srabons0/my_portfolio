
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MouseTrail from "../../components/MouseTrail/MouseTrail";
import PreLoader from "../../components/Preloader/PreLoader";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Service from "../../components/service/Service";
import Skill from "../../components/Skill/Skill";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import Spotlight from "../../components/Spotlight/Spotlight";
import Banner from "./Banner";
import ScrollMenu from "../../components/ScrollMenu";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ContactForm from "../../components/contact/ContactForm";


const Home = () => {
    return (
        <div className="relative">
            <PreLoader></PreLoader>
            <ScrollMenu></ScrollMenu>
            <Banner></Banner>
           <div className="bg-black"><Hero></Hero>
            <SkillsSection></SkillsSection>
            <Skill></Skill>
            <ProjectsSection></ProjectsSection>
            <Service></Service>
            <ProcessSection></ProcessSection>
            <TestimonialsSection></TestimonialsSection>
            <ContactForm></ContactForm>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
