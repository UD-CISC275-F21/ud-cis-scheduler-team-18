import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
//change Andrew's Branch
function App (): JSX.Element {

	function addSem() {
		const body = document.body;
		const tbl = document.createElement("table");
		tbl.style.width = "1000px";
		const tr = tbl.insertRow();
		for (let i = 0;i<4;i++) {
			const td = tr.insertCell();
			td.appendChild(document.createTextNode("Cell I${i}"));

		}
		body.appendChild(tbl);
	}

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
                        <td>PreReqs,CoReqs, Qualities</td>
                    </tr>
                    
                </tbody>

			</table>
			<button id="addSem" >Add Semester</button>
			
		
			
		
		</body>
	);
  
}

export default App;
