import { Link } from "react-router-dom";
import Staffer from "./Staffer";
import "./StaffList.css";

export const StaffList = ({ employees }) => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <section className="staff-list">
      <Link to="/">
        <h2>Our Staff</h2>
      </Link>
      <div className="staffers">{staff}</div>
    </section>
  );
};

export default StaffList;
