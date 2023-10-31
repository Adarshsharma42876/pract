import React from "react";
import { useParams } from "react-router-dom";
import sampleData from "../data/sampleData";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = sampleData.find((c) => c.id === parseInt(courseId, 10));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      {/* Display other course information */}
    </div>
  );
};

export default CourseDetails; // Make sure to export the component like this
