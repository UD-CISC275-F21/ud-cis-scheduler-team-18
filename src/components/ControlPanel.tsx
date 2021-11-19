import React from "react";
import {Button, Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
import CARDS from "../assets/classList.json";
import { Semester } from "../interfaces/semester";
import semList from "../assets/semesterList.json";

export function ControlPanel({setCard, cardVal, ID, setID, listSize, setSem, semID, setSemID, semListSize, sem}:{setCard: (c: Card)=>void, cardVal: Card, ID: number, setID: (r: number)=>void, listSize: number, setSem: (z: Semester)=>void, semID: number, setSemID: (q: number)=>void, semListSize: number, sem: Semester}): JSX.Element {
	let semNameChange = "";
	return <Col>
		<h2>ControlPanel</h2>
		<Button onClick={
			() => {
				if(ID != 0){
					setCard(CARDS[ID-1]);
					setID(ID - 1);
				}
			}
		}>Previous Class</Button>
		<Button onClick= {
			() => {
				sem.classA = cardVal.name;
			}
		}>Add Class</Button>
		<Button onClick={ 
			() => {
				if(ID != listSize-1){
					setCard(CARDS[ID + 1]); 
					setID(ID +1);
				}
			}
		}>Next Class</Button>
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