
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import LandingPageComponent from './pages/landing_page';
import ChatNowPage from './pages/chat_now';
import SelectDurationPage from './pages/select_duration';
import PredefinedQuestions from './pages/predefined_questions';
import LoginPage from './pages/auth/login/login_page';
import SignUpPage from './pages/auth/signup/signup_page';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    
    <Router>

    <Header/>

      <Routes>
        
        <GoogleOAuthProvider clientId={'766514279324-0145si2vt29o5kdqgd2fig6lfdud8ue7.apps.googleusercontent.com'} children={undefined}  />

      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />

      




        <Route path='/' element={<LandingPageComponent/>} />
          
        <Route path="/chatnow" element={<ChatNowPage/>} />

        <Route path="/selectduration" element={<SelectDurationPage/>}/>

        <Route path='/predefined_questions' element={<PredefinedQuestions/>} />

      </Routes>
     
    </Router>
    
  );
}

export default App;
