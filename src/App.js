import { useState } from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFound from "./components/common/NotFound";
import { Navigate, BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path='/pets/:p' element={<PetsList pets={pets} />} />
          <Route path='/pets' element={<Navigate replace to='/pets/cats' />} />
          <Route path='/staff' element={<StaffList employees={employees} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
