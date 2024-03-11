
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import LandingPageComponent from './pages/landing_page';
import ChatNowPage from './pages/chat_now';
import SelectDurationPage from './pages/select_duration';
import PredefinedQuestions from './pages/predefined_questions/predefined_questions';
import LoginPage from './pages/auth/login/login_page';
import SignUpPage from './pages/auth/signup/signup_page';
import ChatBoxComponent from './pages/chat_box_page/chat_box_page';
import PersonGrid from './pages/select_person_to_talk/select_person_to_talk';
import AboutUs from './pages/about/about_us';
import ContactUs from './pages/contact/contact_us';
import Footer from './components/footer';
import TermsAndConditions from './pages/terms_and_conditions/terms_and_conditions';
import HowItWorks from './pages/how_it_works/how_it_works';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      
      
        <Route path="/" element={  <LandingPageComponent />} />
    
        <Route path="/home" element={<LandingPageComponent />} /> 

        <Route path="/about" element={<AboutUs />} />

        <Route path="/termsandconditions" element={<TermsAndConditions />} /> 


        <Route path="/contact" element={<ContactUs />} /> 

        {/* element={ email === "" ? < Navigate to="/home"/> : <LandingPageComponent />}
  */}
        <Route path="/login"  element={<LoginPage /> }/>

        {/* element={ email === ""  ?  <LoginPage /> : <Navigate to="/login"/> } */}

        <Route path="/signup" element={<SignUpPage />} />
    
        <Route path="/chatnow" element={<ChatNowPage />} />

        <Route path="/howitworks" element={<HowItWorks />} />

     
        <Route path="/selectduration" element={<SelectDurationPage />} />
      
        <Route path="/predefined_questions" element={<PredefinedQuestions />} />

        <Route path='/chatbox' element={<ChatBoxComponent/>}/>

        <Route path='/selecttype' element={<PersonGrid />}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
