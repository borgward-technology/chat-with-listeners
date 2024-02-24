
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import LandingPageComponent from './pages/landing_page';
import ChatNowPage from './pages/chat_now';
import SelectDurationPage from './pages/select_duration';
import PredefinedQuestions from './pages/predefined_questions';
import LoginPage from './pages/auth/login/login_page';
import SignUpPage from './pages/auth/signup/signup_page';
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated, setAuthentication] = useState(false);

  
  const [email, setEmail] = useState("");

  useEffect(()=> {
    const localStorageEmail = localStorage.getItem('email')!;
    console.log("localStorageEmail  header   =-----     "+localStorageEmail);
    setEmail(localStorageEmail);
  })
    

  
  return (
    <Router>
      <Header />
      <Routes>
      
      
        <Route path="/" element={  <LandingPageComponent />} />
    
        <Route path="/home" element={ email === "" ? < Navigate to="/home"/> : <LandingPageComponent />} />
 
        <Route path="/login" element={ email === ""  ?  <LoginPage /> : <Navigate to="/login"/> } />

        <Route path="/signup" element={<SignUpPage />} />
    
        <Route path="/chatnow" element={<ChatNowPage />} />
     
        <Route path="/selectduration" element={<SelectDurationPage />} />
      
        <Route path="/predefined_questions" element={<PredefinedQuestions />} />

      </Routes>
    </Router>
  );
}

export default App;
