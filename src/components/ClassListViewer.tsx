import React from "react";
import {Row} from "react-bootstrap";
import courseList from "../assets/classList.json";
import {Course} from "../interfaces/course";


let retval = "";

for(const x in courseList){ 
	//recheck if below line is necessary, prof said doesn't do anything.
	courseList as Course[];
	retval += JSON.stringify(courseList[x].name);
	retval+= ", ";
}

export function ClassListViewer(): JSX.Element {
	return <Row>
		<h1>Class List:</h1>
		<div>{retval}</div>
	</Row>;
}