import React from "react";
import {Button, Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
import CARDS from "../assets/classList.json";
import { Semester } from "../interfaces/semester";
import semList from "../assets/semesterList.json";

export function ControlPanel({setCard, ID, setID, listSize, setSem, semID, setSemID, semListSize}:{setCard: (c: Card)=>void, ID: number, setID: (r: number)=>void, listSize: number, setSem: (z: Semester)=>void, semID: number, setSemID: (q: number)=>void, semListSize: number}): JSX.Element {
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
		<Button>Add Class</Button>
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
		<Button>Clear Semester</Button>
		<Button onClick ={
			() => {
				if(semID != semListSize -1){
					setSem(semList[semID+1]);
					setSemID(semID + 1);
				}
			}
		}>Next Semester</Button>
	</Col>;
}