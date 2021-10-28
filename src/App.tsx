import React from "react";
import logo from "./logo.svg";
import "./App.css";
//change Andrew's Branch
function App (): JSX.Element {
	return (
		<body>
			<h1>UD CIS Scheduler Team 18: Andrew McCracken, Luis Garcia, Justin Anthony</h1>
			<br></br>
			<         div>TODO: Dynamically fill class List. Fill in Semester Planner.</div>
			<h3 id="major">Major:</h3>
			<table id="courseTable">
				<thead>
					<tr>
						<th>Classes Remaining:</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Class A</td>
						<td>Description</td>
					</tr>
					<tr>
						<td>Class B</td>
						<td>Description</td>
					</tr>
				</tbody>
			</table>

			<h3>Semester Planner:</h3>
			<table id="semesterBox">
                <thead>
                    <tr>
                        <td>Semester 1</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Course Title</td>
                        <td>Credit Hours</td>
                        <td>Description</td>
                        <td>Example</td>
                    </tr>
                    
                </tbody>

			</table>
			<button id="semesterAdd">Add Semester</button>
		</body>
	);
  
}

export default App;
