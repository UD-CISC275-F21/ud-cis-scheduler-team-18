import React from "react";
import {Row} from "react-bootstrap";
//import {Semester} from "../interfaces/semester";
import { Semester } from "../interfaces/semester";


export function SemesterViewer({sem}: {sem: Semester}): JSX.Element {
	let retval = "";
	retval += sem.semName + ": ";
	for(const x in sem.courseLoad){
		retval += sem.courseLoad[x].name + ", ";
	}
	let credits = 0;
	for(const x in sem.courseLoad){
		credits += sem.courseLoad[x].credits;
	}
	
	return <Row>
		<h2>Semesters:</h2>
		<h5>Total Credits: {credits}</h5>
		<div>{retval}</div>
	</Row>;
}