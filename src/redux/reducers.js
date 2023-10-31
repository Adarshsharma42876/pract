// reducers.js
const initialState = {
  enrolledCourses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENROLL_COURSE':
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case 'COMPLETE_COURSE':
      const courseIdToComplete = action.payload;
      const updatedEnrolledCourses = state.enrolledCourses.map((courseId) => {
        // Find the course by its ID
        const course = state.courses.find((c) => c.id === courseId);
        if (courseId === courseIdToComplete && course) {
          // Update the completed property of the course
          return {
            ...course,
            completed: true,
          };
        }
        return course;
      });

      return {
        ...state,
        enrolledCourses: updatedEnrolledCourses,
      };

    default:
      return state;
  }
};

export default rootReducer;
