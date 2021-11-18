import React from "react";
import {Row} from "react-bootstrap";
import SEMESTERS from "../assets/semesterList.json";
import {Semester} from "../interfaces/semester";

let retval = "";
const x = 0;//value to change for different semesters
	SEMESTERS as Semester[];
	retval += SEMESTERS[x].name;
	retval += ":\n";
	//SEMESTERS[x].classA = "cisc275";
	if(SEMESTERS[x].classA != "none"){
		retval += SEMESTERS[x].classA;
		retval += "\n";
	}
	if(SEMESTERS[x].classB != "none"){
		retval += SEMESTERS[x].classB;
		retval += "\n";
	}
	if(SEMESTERS[x].classC != "none"){
		retval += SEMESTERS[x].classC;
		retval += "\n";
	}
	if(SEMESTERS[x].classD != "none"){
		retval += SEMESTERS[x].classD;
		retval += "\n";
	}

export function SemesterViewer(): JSX.Element {
	return <Row>
		<h2>Semesters:</h2>
		<div>{retval}</div>
	</Row>;
}