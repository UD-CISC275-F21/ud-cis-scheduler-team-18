import React from "react";
import logo from "./logo.svg";
import "./App.css";
import COURSES from "./classes.json";
import { CourseOverview } from "./CourseOverview";
import { SSL_OP_CISCO_ANYCONNECT } from "constants";
//change 2
const CiscCourses = [
    {
        Department: "CISC",
        ID: 108,
    },
    {
        Department: "CISC",
        ID: 181,
    }
];
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <CourseOverview courses={CiscCourses} />

                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                Andrew McCracken, Luis Garcia, Justin Anthony
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
