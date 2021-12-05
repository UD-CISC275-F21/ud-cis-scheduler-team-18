import React from "react";
import {Button, Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
//import courseList from "../assets/classList.json";
//import { Semester } from "../interfaces/semester";
//import semList from "../assets/semesterList.json";
import { SemesterTest } from "../interfaces/semesterTest";

export function ControlPanel({setCourse, courseVal, courseID, setID, courseDeck, addCourse, setSem, sem, addSem, removeSem, semDeck, semID, setSemID}:{setCourse: (c: Course)=>void, courseVal: Course, courseID: number, setID: (r: number)=>void, courseDeck: Course[], addCourse: (m: Course)=> void, setSem: (z: SemesterTest)=>void, sem: SemesterTest, addSem: (j: SemesterTest) => void, removeSem: (l: SemesterTest) => void, semDeck: SemesterTest[], semID: number, setSemID: (k: number) => void}): JSX.Element {
	return <Col>
		<h2>ControlPanel</h2>
		<Button onClick={
			() => {
				if(courseID != 0){
					setCourse(courseDeck[courseID-1]);
					setID(courseID - 1);
				}
			}
		}>Previous Class</Button>
		<Button onClick= {
			() => {
				addCourse(courseVal);
			}
		}>Add Class</Button>
		<Button onClick ={
			() => {
				/*
				if(sem.classA == courseVal.name){
					sem.classA = "none";
				}else if(sem.classB == courseVal.name){
					sem.classB = "none";
				}else if(sem.classC == courseVal.name){
					sem.classC = "none";
				}else if(sem.classD == courseVal.name){
					sem.classD = "none";
				}else if(sem.classE == courseVal.name){
					sem.classE = "none";
				}else if(sem.classF == courseVal.name){
					sem.classF = "none";
				}else if(sem.classG == courseVal.name){
					sem.classG = "none";
				}else if(sem.classH == courseVal.name){
					sem.classH = "none";
				}else if(sem.classI == courseVal.name){
					sem.classI = "none";
				}else if(sem.classJ == courseVal.name){
					sem.classJ = "none";
				}
				*/
			}
		}>Remove Class</Button>
		<Button onClick={ 
			() => {
				if(courseID != courseDeck.length-1){
					setCourse(courseDeck[courseID + 1]); 
					setID(courseID +1);
				}
			}
		}>Next Class</Button>
		
		<br></br>
		<Button onClick ={
			() => {
				
				if(semID != 0){
					setSem(semDeck[semID-1]);
					setSemID(semID -1);
				}
				
			}
		}>Previous Semester</Button>
		<Button onClick ={
			() => {
				const holderVal = "New Semester " + (semID+1).toString();
				addSem({semName: holderVal, courseLoad: [], ID: (semID +1)});
			}
		}>Add Semester </Button>
		<Button onClick ={
			() => {
				/*
				sem.classA = "none";
				sem.classB = "none";
				sem.classC = "none";
				sem.classD = "none";
				sem.classE = "none";
				sem.classF = "none";
				sem.classG = "none";
				sem.classH = "none";
				sem.classI = "none";
				sem.classJ = "none";
				*/
			}
		}>Clear Semester</Button>
		<Button onClick ={
			() => {
				
				if(semID != semDeck.length -1){
					setSem(semDeck[semID+1]);
					setSemID(semID + 1);
				}
				
			}
		}>Next Semester</Button>
		<br></br>
		<Button onClick ={
			() => {
				let newSemName = "";
				const holderVal = prompt("Enter Name:");
				if(holderVal != null){
					newSemName = holderVal;
				}
				setSem({semName: newSemName, courseLoad: sem.courseLoad, ID: sem.ID});
			}
		}>Change Semester Name</Button>
		<Button onClick ={
			() => {
				removeSem(sem);
			}
		}>Remove Semester</Button>
	</Col>;
}