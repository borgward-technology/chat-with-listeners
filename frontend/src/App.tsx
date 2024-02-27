
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import LandingPageComponent from './pages/landing_page';
import ChatNowPage from './pages/chat_now';
import SelectDurationPage from './pages/select_duration';
import PredefinedQuestions from './pages/predefined_questions/predefined_questions';
import LoginPage from './pages/auth/login/login_page';
import SignUpPage from './pages/auth/signup/signup_page';
import ChatBoxComponent from './pages/chat_box_page/chat_box_page';
// import { useEffect, useState } from 'react';

function App() {

  // const [isAuthenticated, setAuthentication] = useState(false);

  
  // const [email, setEmail] = useState("");

  // useEffect(()=> {
  //   const localStorageEmail = localStorage.getItem('email')!;
  //   console.log("localStorageEmail  header   =-----     "+localStorageEmail);
  //   setEmail(localStorageEmail);
  // })
    

  
  return (
    <Router>
      <Header />
      <Routes>
      
      
        <Route path="/" element={  <LandingPageComponent />} />
    
        <Route path="/home" element={<LandingPageComponent />} /> 
        {/* element={ email === "" ? < Navigate to="/home"/> : <LandingPageComponent />}
  */}
        <Route path="/login"  element={<LoginPage /> }/>

        {/* element={ email === ""  ?  <LoginPage /> : <Navigate to="/login"/> } */}

        <Route path="/signup" element={<SignUpPage />} />
    
        <Route path="/chatnow" element={<ChatNowPage />} />
     
        <Route path="/selectduration" element={<SelectDurationPage />} />
      
        <Route path="/predefined_questions" element={<PredefinedQuestions />} />

        <Route path='/chatbox' element={<ChatBoxComponent/>}/>

      </Routes>
    </Router>
  );
}

export default App;
