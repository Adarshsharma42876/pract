import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // Make sure the Redux store import is correct
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";

import StudentDashboard from "./components/StudentDashboard";
import sampleData from "./data/sampleData"; // Correct way to import

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <CourseListing courses={sampleData} />{" "}
              {/* Check the component name */}
            </Route>
            <Route path="/course/:id" component={CourseDetails} />
            <Route path="/dashboard" component={StudentDashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
