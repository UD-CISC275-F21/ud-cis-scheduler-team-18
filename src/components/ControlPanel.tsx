import React from "react";
import {Button, Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
import CARDS from "../assets/classList.json";



export function ControlPanel({setCard}: {setCard: (c: Card)=>void}): JSX.Element {
	return <Col>
		<h2>ControlPanel</h2>
		
		<Button onClick={ 
			() => setCard(CARDS[1])
		}>Next Class</Button>
		<Button>Add to Semester</Button>
	</Col>;
}