
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import LandingPageComponent from './pages/landing_page';
import ChatNowPage from './pages/chat_now';
import SelectDurationPage from './pages/select_duration';
import PredefinedQuestions from './pages/predefined_questions';

function App() {
  return (
    
    <Router>

    <Header/>

      <Routes>

        <Route path='/' element={<LandingPageComponent/>} />
          
        <Route path="/chatnow" element={<ChatNowPage/>} />

        <Route path="/selectduration" element={<SelectDurationPage/>}/>

        <Route path='/predefined_questions' element={<PredefinedQuestions/>} />

      </Routes>
     
    </Router>
    
  );
}

export default App;
