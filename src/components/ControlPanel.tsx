import React from "react";
import {Button, Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
import CARDS from "../assets/classList.json";


export function ControlPanel({setCard, ID, setID, listSize}:{setCard: (c: Card)=>void, ID: number, setID: (r: number)=>void, listSize: number}): JSX.Element {
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
		<Button>Previous Semester</Button>
		<Button>Add Semester</Button>
		<Button>Next Semester</Button>
	</Col>;
}