import React from "react";
import {Row} from "react-bootstrap";
import CARDS from "../assets/classList.json";
import {Card} from "../Interfaces/card";


let retval = "";

for(const x in CARDS){ 
	CARDS as Card[];
	retval += JSON.stringify(CARDS[x].name);
	retval+= ", ";
}

export function ClassListViewer(): JSX.Element {
	return <Row>
		<h1>Class List:</h1>
		<div>{retval}</div>
	</Row>;
}