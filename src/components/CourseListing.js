import React from "react";
import { useDispatch } from "react-redux";
import { enrollCourse } from "../redux/actions";
import sampleData from "../data/sampleData";

const CourseListing = () => {
  const courses = sampleData;
  const dispatch = useDispatch();

  const handleEnroll = (courseId) => {
    dispatch(enrollCourse(courseId));
  };

  return (
    <div>
      <h1>Course Listing</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          {/* Display other course information */}
          <button onClick={() => handleEnroll(course.id)}>Enroll</button>
        </div>
      ))}
    </div>
  );
};

export default CourseListing; // Make sure to export the component like this
