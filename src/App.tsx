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
import { CourseListViewer } from "./components/CourseListViewer";
//interfaces
import { Course } from "./interfaces/course";
//import { Semester } from "./interfaces/semester";
import { SemesterTest } from "./interfaces/semesterTest";






function App (): JSX.Element {
	document.title = "UD CISC Scheduler Team 18";
	//postMVP use states to order later... Decks...
	const [courseDeck, setCourseDeck] = useState<Course[]>(courseList);
	const [semDeck, setSemDeck] = useState<SemesterTest[]>([{semName: "New Semester", courseLoad: [], ID: 0}]);
	//semester use states
	const [activeSemester, setActiveSemester] = useState<SemesterTest>(semDeck[0]);
	const [activeSemesterID, setActiveSemesterID] = useState<number>(0);
	//const [semListSize] = useState<number>(semDeck.length);
	//class use states
	//const [courseListSize] = useState<number>(courseDeck.length);
	const [activeCourse, setActiveCourse] = useState<Course>(courseList[0]);
	const [activeID, setActiveID] = useState<number>(0);


	function addSem(newSem: SemesterTest){
		setSemDeck([...semDeck, newSem]);
	}
	/*
	function removeSem(newSem: SemesterTest){

	}
	function addCourse(newCourse: Course){

	}
	function removeCourse( newCourse: Course){

	}
	*/
	//Return Value:
	return (
		<Container className="App">
			<CourseListViewer courseDeckVal ={courseDeck}></CourseListViewer>
			<Row>
				<h1>UD CIS Scheduler Team 18 Andrew McCracken</h1>
			</Row>
			<Row>
				<ControlPanel 
				setCourse={setActiveCourse} 
				courseVal = {activeCourse} 
				ID = {activeID} setID = {setActiveID}
				courseDeck = {courseDeck}  
				setSem = {setActiveSemester}
				sem = {activeSemester}
				addSem = {addSem}
				semDeck = {semDeck}
				semID = {activeSemesterID}
				setSemID = {setActiveSemesterID} ></ControlPanel>
				<CourseViewer course ={activeCourse} ></CourseViewer>
			</Row>
			<SemesterViewer sem = {activeSemester}></SemesterViewer>
		</Container>
	);
  

}

export default App;
