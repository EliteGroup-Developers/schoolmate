import React from "react";
// import Nav from "./Nav";
import "./courseRegistration.css";
import Nav from './Home/Nav'

const CourseRegistration = () => {
  return (
    <>
    <Nav/>



     
      <div className="center">
        <div className="registrationForm">
          <h1 className='text-[#DBFDC8]'>Student Course Registration</h1>
          <form action="" className=".form">
            <label htmlFor="studentDetails">Student's Details</label>
            <div className="detailsContainer justify-between items-center">
              <input placeholder="Surname" type="text" />
              <input placeholder="First name" type="text" />
              <input placeholder="Other name" type="text" />
              <input placeholder="Matriculation Number" type="text" />
              <input placeholder="Registration Number" type="text" />
              <input placeholder="Department" type="text" />
              <input placeholder="Level" type="text" />
              <input placeholder="Semester" type="text" />
              <input placeholder="Faculty" type="text" />
            </div>

            <label htmlFor="courses">Course</label>
            <div className="courseContainer">
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
              <input placeholder="course" type="text" />
            </div>

            <h2 className='text-[#fdfdfd]'>Electives</h2>
            <p  className="text-[#ADECCF]">
              Elective 1<input  type="radio" />
            </p>

            <p className="text-[#ADECCF]">
              Elective 2<input type="radio" />
            </p>

            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseRegistration;