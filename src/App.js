import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard1 from './COMPONENTS/dashboard/Dashboard';
import SignUp from './COMPONENTS/Components/Signup';
import SignInSide from './COMPONENTS/Components/SignIn';
import AdminLogin from './COMPONENTS/Components/AdminLogin';
import Blog from './blog/Blog';
import AboutPage from './blog/About/About';
import FeedbackForm from './Feedback/form';
import Submissions from './Feedback/submissions';
import Welcome from './welcome/Blog';
import Chatbot from './Chatbot'; // Import the Chatbot component
import Leaderboard from './COMPONENTS/LeaderBoard/LeaderBoard';

function App() {
  return (
    <div className="App">
      <Chatbot/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Sign" element={<SignInSide />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path="/AdminDashBoard" element={<Dashboard1 />} />
        <Route path="/Home" element={<Blog />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/FeedBack" element={<FeedbackForm/>} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="submission/:id" element={<Submissions/>} />
        <Route path="/LeaderBoard" element={<Leaderboard/>} />

        
 
        <Route path="/Chat" element={<Chatbot />} /> {/* Add a route for the chat */}
        {/* <Route path="/" element={<ComplaintForm/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
