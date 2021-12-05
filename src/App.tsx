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

	//USE STATES:
	//postMVP use states to order later... Decks...
	const [courseDeck, setCourseDeck] = useState<Course[]>(courseList);
	const [semDeck, setSemDeck] = useState<SemesterTest[]>([{semName: "New Semester", courseLoad: [], ID: 0}]);
	//semester use states
	const [activeSemester, setActiveSemester] = useState<SemesterTest>(semDeck[0]);
	const [activeSemesterID, setActiveSemesterID] = useState<number>(0);
	//class use states
	const [activeCourse, setActiveCourse] = useState<Course>(courseList[0]);
	const [activeID, setActiveID] = useState<number>(0);
	


	//FUNCTIONS:

	//Adds a new semester to our semester list use state, called in control panel.
	function addSem(newSem: SemesterTest){
		setSemDeck([...semDeck, newSem]);
	}
	//non functional atm, continue work.
	function removeSem(newSem: SemesterTest){
		let newSemDeck: SemesterTest[] = [];
		for(const x in semDeck){
			if(semDeck[x].ID != newSem.ID){
				newSemDeck = [...newSemDeck, semDeck[x]];
			}
		}
		setSemDeck(newSemDeck);
		setActiveSemester(semDeck[0]);
		setActiveSemesterID(activeSemester.ID);
	}
	//adds current activeCourse to active semester. called in Control Panel
	function addCourse(newCourse: Course){
		let contains = false;
		for( const x in activeSemester.courseLoad){
			if (activeSemester.courseLoad[x] == newCourse){
				contains = true;
			}
		}
		if(contains == false){
			setActiveSemester({semName: activeSemester.semName, courseLoad: [...activeSemester.courseLoad, newCourse], ID: activeSemester.ID});
		}else{
			alert("Class already added!");
		}
	}
	/*
	function removeCourse( newCourse: Course){

	}
	*/



	//RETURN VALUE:
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
				courseID = {activeID} setID = {setActiveID}
				courseDeck = {courseDeck}
				addCourse = {addCourse}  
				setSem = {setActiveSemester}
				sem = {activeSemester}
				addSem = {addSem}
				removeSem = {removeSem}
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
