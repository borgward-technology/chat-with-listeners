
import LandingPage from "../components/landing_page/landing_page";
import LandingPageCategories from "../components/landing_page/landing_page_categories";
import LandingPageContentTwo from "../components/landing_page/landing_page_content";



const LandingPageComponent = () => {
    return (
        // style={({display: "flex", flexDirection:"column"})}
        <div style={({  width:"100%", margin:0, padding:0})}>
            <LandingPage />
            <LandingPageContentTwo/>
            <LandingPageCategories/>
        </div>
    );
}

export default LandingPageComponent;