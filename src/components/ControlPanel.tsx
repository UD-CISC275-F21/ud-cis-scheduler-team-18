import React from "react";
import {Button, Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
import CARDS from "../assets/classList.json";


export function ControlPanel({setCard, ID, setID}:{setCard: (c: Card)=>void, ID: number, setID: (r: number)=>void}): JSX.Element {
	return <Col>
		<h2>ControlPanel</h2>
		
		<Button onClick={ 
			() => {
				setCard(CARDS[ID + 1]); 
				setID(ID +1);
			}
		}>Next Class</Button>
		<Button onClick={
			() => {
				setCard(CARDS[ID-1]);
				setID(ID - 1);
			}
		}>Previous Class</Button>
		<Button>Add to Semester</Button>
	</Col>;
}