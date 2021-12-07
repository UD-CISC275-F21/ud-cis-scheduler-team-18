import React from "react";
import {Button, Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function ControlPanel({setCourse, courseVal, courseID, setID, courseDeck, addCourse, removeCourse, setSem, sem, addSem, removeSem, clearSem, semDeck, semIndex, setSemIndex}:{setCourse: (c: Course)=>void, courseVal: Course, courseID: number, setID: (r: number)=>void, courseDeck: Course[], addCourse: (m: Course)=> void, removeCourse: (o: Course)=>void, setSem: (z: Semester)=>void, sem: Semester, addSem: (j: Semester) => void, removeSem: (l: Semester) => void, clearSem: (n: void) => void, semDeck: Semester[], semIndex: number, setSemIndex: (k: number) => void}): JSX.Element {
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
				removeCourse(courseVal);
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
				clearSem();
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