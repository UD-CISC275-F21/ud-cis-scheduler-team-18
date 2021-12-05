import React from "react";
import {Button, Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
//import courseList from "../assets/classList.json";
//import { Semester } from "../interfaces/semester";
//import semList from "../assets/semesterList.json";
import { Semester } from "../interfaces/semester";

export function ControlPanel({setCourse, courseVal, courseID, setID, courseDeck, addCourse, setSem, sem, addSem, removeSem, semDeck, semIndex, setSemIndex}:{setCourse: (c: Course)=>void, courseVal: Course, courseID: number, setID: (r: number)=>void, courseDeck: Course[], addCourse: (m: Course)=> void, setSem: (z: Semester)=>void, sem: Semester, addSem: (j: Semester) => void, removeSem: (l: Semester) => void, semDeck: Semester[], semIndex: number, setSemIndex: (k: number) => void}): JSX.Element {
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
				
				if(semIndex != 0){
					setSem(semDeck[semIndex-1]);
					setSemIndex(semIndex -1);
				}
				
			}
		}>Previous Semester</Button>
		<Button onClick ={
			() => {
				let newSemName = "";
				const holderVal = prompt("Enter Name:");
				if(holderVal != null){
					newSemName = holderVal;
				}
				addSem({semName: newSemName, courseLoad: []});
			}
		}>Add Semester </Button>
		<Button onClick ={
			() => {
				setSem({semName: sem.semName, courseLoad: []});
			}
		}>Clear Semester</Button>
		<Button onClick ={
			() => {
				
				if(semIndex != semDeck.length -1){
					setSem(semDeck[semIndex+1]);
					setSemIndex(semIndex + 1);
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
				setSem({semName: newSemName, courseLoad: sem.courseLoad});
			}
		}>Change Semester Name</Button>
		<Button onClick ={
			() => {
				removeSem(sem);
			}
		}>Remove Semester</Button>
	</Col>;
}