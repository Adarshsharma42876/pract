import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeCourse } from "../redux/actions";
import sampleData from "../data/sampleData";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  const handleComplete = (courseId) => {
    dispatch(completeCourse(courseId));
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map((courseId) => {
          // Find the course using courseId from your sample data
          const course = sampleData.find((c) => c.id === courseId);

          if (!course) {
            return null; // Course not found
          }

          return (
            <li key={course.id}>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              {/* Display other course information */}
              <button onClick={() => handleComplete(course.id)}>
                Mark as Completed
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentDashboard; // Make sure to export the component like this
