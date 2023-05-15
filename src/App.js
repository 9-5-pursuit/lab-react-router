import { useState } from "react";
// to use router, you have to import it from the installed react router dom below
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

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
      <Router>
        {/* Nav and footer go in the router but outside the routes */}
       <Nav />
       <Routes>
        {/* path="/" is directed to home by default */}
        <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
        <Route path="/staff-list" element={<StaffList employees={employees} />} />

        {/* The pets are nested inside pet-list */}
        <Route path="/pets" element={<PetsList pets={pets} />}>
          <Route path="cats" element={<PetsList pets={pets} />} />
          <Route path="dogs" element={<PetsList pets={pets} />} />
        </Route>

       </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
