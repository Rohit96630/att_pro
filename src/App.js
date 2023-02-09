import "./App.css";
import LoginPage from "./Component/LoginPage";
import Attendance from "./Component/Attendance";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path='/' component={LoginPage} />
    //     <Route path='/Attendance' component={<Attendance/> } />
    //   </Switch>
    // </Router>

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="attendance" element={<Attendance />} />
    </Routes>
  );
}

export default App;
