import React from "react";
import {Row} from "react-bootstrap";
//import {Semester} from "../interfaces/semester";
import { SemesterTest } from "../interfaces/semesterTest";


export function SemesterViewer({sem}: {sem: SemesterTest}): JSX.Element {
	/*
	let retval = "";
	retval += sem.name;
	retval += ":\n";
	//sem.classA = "cisc275";
	if(sem.classA != "none"){
		retval += sem.classA;
		retval += "\n";
	}
	if(sem.classB != "none"){
		retval += sem.classB;
		retval += "\n";
	}
	if(sem.classC != "none"){
		retval += sem.classC;
		retval += "\n";
	}
	if(sem.classD != "none"){
		retval += sem.classD;
		retval += "\n";
	}
	*/
	
	let retval2 = "";
	retval2 += sem.semName + ": ";
	for(const x in sem.courseLoad){
		retval2 += x;
	}
	
	return <Row>
		<h2>Semesters:</h2>
		<div>{retval2}</div>
	</Row>;
}