//imports
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
//assets
import courseList from "./assets/classList.json";
//components
import { CourseViewer } from "./components/CourseViewer";
import { ControlPanel } from "./components/ControlPanel";
import { SemesterViewer } from "./components/SemesterViewer";
import { CourseListViewer } from "./components/CourseListViewer";
//interfaces
import { Course } from "./interfaces/course";
//import { Semester } from "./interfaces/semester";
import { Semester } from "./interfaces/semester";






function App (): JSX.Element {
	document.title = "UD CISC Scheduler Team 18";

	//USE STATES:
	//postMVP use states to order later... Decks...
	const [courseDeck, setCourseDeck] = useState<Course[]>(courseList);
	const [semDeck, setSemDeck] = useState<Semester[]>([{semName: "New Semester", courseLoad: []}]);
	//semester use states
	const [activeSemester, setActiveSemester] = useState<Semester>(semDeck[0]);
	const [activeSemesterIndex, setActiveSemesterIndex] = useState<number>(0);
	//class use states
	const [activeCourse, setActiveCourse] = useState<Course>(courseList[0]);
	const [activeID, setActiveID] = useState<number>(0);


	//FUNCTIONS:

	//Adds a new semester to our semester list use state, called in control panel.
	function addSem(newSem: Semester){
		setSemDeck([...semDeck, newSem]);
	}
	//Removes current selected semester from the semester deck use state, called in control panel...
	function removeSem(newSem: Semester){
		if(semDeck.length == 1){
			alert("Only 1 Semester, cannot delete.");
		}else{

		
			let newSemDeck: Semester[] = [];
			for(const x in semDeck){
				if(semDeck[x].semName != newSem.semName){
					newSemDeck = [...newSemDeck, semDeck[x]];
				}
			}
			setSemDeck(newSemDeck);
			setActiveSemester(newSemDeck[0]);
			setActiveSemesterIndex(0);
		}
	}
	//adds current activeCourse to current active semester and updates semDeck. called in Control Panel
	function addCourse(newCourse: Course){
		let contains = false;
		for( const x in activeSemester.courseLoad){
			if (activeSemester.courseLoad[x] == newCourse){
				contains = true;
			}
		}
		if(contains == false){
			let newSemDeck: Semester[] = [];
			for(const x in semDeck){
				if(semDeck[x] != activeSemester){
					newSemDeck = [...newSemDeck, semDeck[x]];
				}else{
					newSemDeck = [...newSemDeck, {semName: activeSemester.semName, courseLoad: [...activeSemester.courseLoad, newCourse]}];
				}
			}
			setSemDeck(newSemDeck);
			setActiveSemester(newSemDeck[activeSemesterIndex]);
		}else{
			alert("Class already added!");
		}
	}
	//clears semester of all classes and updates the relating use states... called in control panel
	function clearSemester(){
		let newSemDeck: Semester[] = [];
		for(const x in semDeck){
			if(semDeck[x] != activeSemester){
				newSemDeck = [...newSemDeck, semDeck[x]];
			}else{
				newSemDeck = [...newSemDeck, {semName: activeSemester.semName, courseLoad: []}];
			}
		}
		setSemDeck(newSemDeck);
		setActiveSemester(newSemDeck[activeSemesterIndex]);
	}
	//removes the current active course from the current active semester and updates the use states accordingly... called in control panel
	function removeCourse( newCourse: Course){
		let newSemDeck: Semester[] = [];
		for(const x in semDeck){
			if(semDeck[x] != activeSemester){
				newSemDeck = [...newSemDeck, semDeck[x]];
			}else{
				let newCourseLoad: any[] = [];
				for(const y in semDeck[x].courseLoad){
					if(semDeck[x].courseLoad[y] != newCourse){
						newCourseLoad = [...newCourseLoad, semDeck[x].courseLoad[y]];
					}
				}
				newSemDeck = [...newSemDeck, {semName: semDeck[x].semName, courseLoad: newCourseLoad}];
			}
		}
		setSemDeck(newSemDeck);
		setActiveSemester(newSemDeck[activeSemesterIndex]);
	}
	//function renames the current active semester and updates the corresponding usestates... called in control panel
	function renameSemester(){
		let newSemDeck: Semester[] = [];
		let newSemName = "";
				const holderVal = prompt("Enter Name:");
				if(holderVal != null){
					newSemName = holderVal;
				}
				for(const x in semDeck){
					if(semDeck[x] != activeSemester){
						newSemDeck = [...newSemDeck, semDeck[x]];
					}else{
						newSemDeck = [...newSemDeck, {semName: newSemName, courseLoad: semDeck[x].courseLoad}];
					}
				}
				setSemDeck(newSemDeck);
				setActiveSemester(newSemDeck[activeSemesterIndex]);
	}



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
				removeCourse = {removeCourse}  
				setSem = {setActiveSemester}
				sem = {activeSemester}
				addSem = {addSem}
				removeSem = {removeSem}
				clearSem = {clearSemester}
				renameSem = {renameSemester}
				semDeck = {semDeck}
				semIndex = {activeSemesterIndex}
				setSemIndex = {setActiveSemesterIndex} ></ControlPanel>
				<CourseViewer course ={activeCourse} ></CourseViewer>
			</Row>
			<SemesterViewer sem = {activeSemester}></SemesterViewer>
		</Container>
	);
  

}

export default App;
