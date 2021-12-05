import React from "react";
import {Row} from "react-bootstrap";
//import courseList from "../assets/classList.json";
import {Course} from "../interfaces/course";

/*old way of getting course list
let retval = "";
for(const x in courseList){ 
	//checked below after Prof suggestions, is not necessary... keeping commented just in case...
	//courseList as Course[];
	retval += JSON.stringify(courseList[x].name);
	retval+= ", ";
}
*/
export function CourseListViewer({courseDeckVal}: {courseDeckVal: Course[]}): JSX.Element {
	let retval2 = "";
	for(const x in courseDeckVal){
		retval2 += courseDeckVal[x].name + ", ";
	}
	return <Row>
		<h1>Class List:</h1>
		<div>{retval2}</div>
	</Row>;
}