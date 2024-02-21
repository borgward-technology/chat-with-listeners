import LandingPage from "../components/landing_page";
import LandingPageContentTwo from "../components/landing_page_content";

const LandingPageComponent = () => {
    return (

        <div style={({display: "flex", flexDirection:"column"})}>
            <LandingPage />
            <LandingPageContentTwo/>
        </div>
    );
}

export default LandingPageComponent;