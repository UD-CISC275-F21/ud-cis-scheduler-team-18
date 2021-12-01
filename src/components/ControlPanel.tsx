import React from "react";
import {Button, Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
import courseList from "../assets/classList.json";
import { Semester } from "../interfaces/semester";
import semList from "../assets/semesterList.json";

export function ControlPanel({setCourse, courseVal, ID, setID, listSize, setSem, semID, setSemID, semListSize, sem}:{setCourse: (c: Course)=>void, courseVal: Course, ID: number, setID: (r: number)=>void, listSize: number, setSem: (z: Semester)=>void, semID: number, setSemID: (q: number)=>void, semListSize: number, sem: Semester}): JSX.Element {
	let semNameChange = "";
	return <Col>
		<h2>ControlPanel</h2>
		<Button onClick={
			() => {
				if(ID != 0){
					setCourse(courseList[ID-1]);
					setID(ID - 1);
				}
			}
		}>Previous Class</Button>
		<Button onClick= {
			() => {
				if(sem.classA == courseVal.name || sem.classB == courseVal.name || sem.classC == courseVal.name || sem.classD == courseVal.name || sem.classE == courseVal.name || sem.classF == courseVal.name || sem.classG == courseVal.name || sem.classH == courseVal.name || sem.classI == courseVal.name || sem.classJ == courseVal.name){
					alert("Class already scheduled");
				}else if(sem.classA == "none"){
					sem.classA = courseVal.name;
				}else if(sem.classB == "none"){
					sem.classB = courseVal.name;
				}else if(sem.classC == "none"){
					sem.classC = courseVal.name;
				}else if(sem.classD == "none"){
					sem.classD = courseVal.name;
				}else if(sem.classE == "none"){
					sem.classE = courseVal.name;
				}else if(sem.classF == "none"){
					sem.classF = courseVal.name;
				}else if(sem.classG == "none"){
					sem.classG = courseVal.name;
				}else if(sem.classH == "none"){
					sem.classH = courseVal.name;
				}else if(sem.classI == "none"){
					sem.classI = courseVal.name;
				}else if(sem.classJ == "none"){
					sem.classJ = courseVal.name;
				}else{
					alert("No empty slots.");
				}
			}
		}>Add Class</Button>
		<Button onClick={ 
			() => {
				if(ID != listSize-1){
					setCourse(courseList[ID + 1]); 
					setID(ID +1);
				}
			}
		}>Next Class</Button>
		<Button onClick ={
			() => {
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
			}
		}>Remove Class</Button>
		<br></br>
		<Button onClick ={
			() => {
				if(semID != 0){
					setSem(semList[semID-1]);
					setSemID(semID -1);
				}
			}
		}>Previous Semester</Button>
		<Button onClick ={
			() => {
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
			}
		}>Clear Semester</Button>
		<Button onClick ={
			() => {
				if(semID != semListSize -1){
					setSem(semList[semID+1]);
					setSemID(semID + 1);
				}
			}
		}>Next Semester</Button>
		<br></br>
		<input onChange={event => semNameChange = event.target.value}></input>
		<br></br>
		<Button onClick ={
			() => {
				sem.name = semNameChange;
				setSem(semList[semID]);
			}
		}>Change Semester Name</Button>
		
	</Col>;
}