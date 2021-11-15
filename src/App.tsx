import React from "react";
import "./App.css";
//change Andrew's Branch
function App (): JSX.Element {
	let numSemesters = 0;
	function addSem() {
		numSemesters++;
		const sem = "Semester " + numSemesters.toString();
		const semBox = document.getElementById("semesterBox")!;
		semBox.innerHTML += "<table class = \"sem\"> <h5>" + sem +"</h5></table>";
		//alert(semBox.innerHTML);
	}

	return (
		<body>
			<h1>UD CIS Scheduler Team 18: Andrew McCracken, Luis Garcia</h1>
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
			
			<table className = "semesterBox">
			</table>
			<button id="addSem" onClick= {addSem} >Add Semester</button>
			
		
			
		
		</body>
	);
  
}

export default App;
