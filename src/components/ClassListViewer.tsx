import React from "react";
import {Row} from "react-bootstrap";
import CARDS from "../assets/classList.json";



let retval = "";

for(const x in CARDS){
	retval += x;
	retval+= " ";
}

export function ClassListViewer(): JSX.Element {
	return <Row>
		<h1>Class List:</h1>
		<div>{retval}</div>
	</Row>;
}