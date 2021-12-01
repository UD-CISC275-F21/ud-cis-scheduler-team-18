//imports
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
//assets
import courseList from "./assets/classList.json";
import semesterList from "./assets/semesterList.json";
//components
import { CourseViewer } from "./components/CourseViewer";
import { ControlPanel } from "./components/ControlPanel";
import { SemesterViewer } from "./components/SemesterViewer";
import { ClassListViewer } from "./components/ClassListViewer";
//interfaces
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";






function App (): JSX.Element {
	document.title = "UD CISC Scheduler Team 18";
	//semester use states
	const [activeSemester, setActiveSemester] = useState<Semester>(semesterList[0]);
	const [activeSemesterID, setActiveSemesterID] = useState<number>(0);
	const [semListSize] = useState<number>(semesterList.length);
	//class use states
	const [classListSize] = useState<number>(courseList.length);
	const [activeCard, setActiveCard] = useState<Course>(courseList[0]);
	const [activeID, setActiveID] = useState<number>(0);
	return (
		<Container className="App">
			<ClassListViewer></ClassListViewer>
			<Row>
				<h1>UD CIS Scheduler Team 18 Andrew McCracken</h1>
			</Row>
			<Row>
				<ControlPanel setCard={setActiveCard} cardVal = {activeCard} ID = {activeID} setID = {setActiveID} listSize = {classListSize} setSem = {setActiveSemester} semID = {activeSemesterID} setSemID = {setActiveSemesterID} semListSize ={semListSize} sem = {activeSemester} ></ControlPanel>
				<CourseViewer card ={activeCard}></CourseViewer>
			</Row>
			<SemesterViewer sem = {activeSemester}></SemesterViewer>
		</Container>
	);
  

}

export default App;
