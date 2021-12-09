import React from "react";
import {Button, Col, ButtonGroup} from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function ControlPanel({setCourse, courseVal, courseID, setID, courseDeck, addCourse, removeCourse, setSem, sem, addSem, removeSem, resetSems, clearSem, renameSem, semDeck, semIndex, setSemIndex}:{setCourse: (c: Course)=>void, courseVal: Course, courseID: number, setID: (r: number)=>void, courseDeck: Course[], addCourse: (m: Course)=> void, removeCourse: (o: Course)=>void, setSem: (z: Semester)=>void, sem: Semester, addSem: (j: Semester) => void, removeSem: (l: Semester) => void, resetSems:(q: void) => void, clearSem: (n: void) => void, renameSem: (p: void) => void, semDeck: Semester[], semIndex: number, setSemIndex: (k: number) => void}): JSX.Element {
	return <Col>
		<h2>Control Panel</h2>

		
		<ButtonGroup>
		<Button variant="secondary" size="sm" onClick={
			() => {
				if(courseID != 0){
					setCourse(courseDeck[courseID-1]);
					setID(courseID - 1);
				}
			}
		}>Previous Class</Button>
		<Button variant="secondary" size="sm" onClick= {
			() => {
				addCourse(courseVal);
			}
		}>Add Class</Button>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				removeCourse(courseVal);
			}
		}>Remove Class</Button>
		<Button variant="secondary" size="sm" onClick={ 
			() => {
				if(courseID != courseDeck.length-1){
					setCourse(courseDeck[courseID + 1]); 
					setID(courseID +1);
				}
			}
		}>Next Class</Button>
		</ButtonGroup>


		<br></br>


		<ButtonGroup>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				
				if(semIndex != 0){
					setSem(semDeck[semIndex-1]);
					setSemIndex(semIndex -1);
				}
				
			}
		}>Previous Semester</Button>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				let newSemName = "";
				const holderVal = prompt("Enter Name:");
				if(holderVal != null){
					newSemName = holderVal;
				}
				addSem({semName: newSemName, courseLoad: []});
			}
		}>Add Semester </Button>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				clearSem();
			}
		}>Clear Semester</Button>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				if(semIndex != semDeck.length -1){
					setSem(semDeck[semIndex+1]);
					setSemIndex(semIndex + 1);
				}
			}
		}>Next Semester</Button>
		</ButtonGroup>


		<br></br>

		<ButtonGroup>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				renameSem();
			}
		}>Rename Semester</Button>
		<Button variant="secondary" size="sm" onClick ={
			() => {
				removeSem(sem);
			}
		}>Remove Semester</Button>
		<Button variant="secondary" size="sm" onClick ={
			() =>{
				resetSems();
			}
		}>Reset Semesters</Button>
		</ButtonGroup>
	</Col>;
}