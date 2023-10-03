// import AboutUs from "./AboutUs/AboutUs";
import CallUs from "./home_page/Call";
import StudentReview from "./home_page/Students review";
import Courses from "./home_page/courses";
import Line from "./home_page/Line";
import Why_Webbrical from "./home_page/Why Webbrical";
import How from "./home_page/how";
import Landing from "./home_page/Landing";
import Login from "./registration/Login";
import SignUp from "./registration/SingUp";

const App = () => {
  return (
    <div className="Container-fluid"> 
      {/* <Landing/>
      <Why_Webbrical/> 
      <How/>
      <Line/>
      <Courses/>
      <CallUs/>
      <StudentReview/> */}
      <Login/>
      </div>
    );
}

export default App;