import React from "react";
import {Row, ListGroup, ListGroupItem} from "react-bootstrap";
import { Semester } from "../interfaces/semester";
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
export function CourseListViewer({courseDeckVal, semDeck}: {courseDeckVal: Course[], semDeck: Semester[]}): JSX.Element {
	let retval = "";
	for(const x in courseDeckVal){
		retval += courseDeckVal[x].name + ", ";
	}

	//setup for courses taken and courses needed lists
	let coursesNeeded: Course[] = [];
	let coursesTaken: Course[] = [];
	for(const x in courseDeckVal){
		let taken = false;
		for(const y in semDeck){
			for(const z in semDeck[y].courseLoad){
				if(courseDeckVal[x] == semDeck[y].courseLoad[z]){
					taken = true;
				}
			}
		}
		if(taken == false){
			coursesNeeded = [...coursesNeeded, courseDeckVal[x]];
		}else{
			coursesTaken = [...coursesTaken, courseDeckVal[x]];
		}
	}

	//setup for course list listGroup display:
	let courses: Course[] = [];
	courses = courseDeckVal;
	const listCourses = courses.map((val)=>
		<ListGroup.Item variant = "dark" key ={val.id}>{val.name}</ListGroup.Item>
	);
	//setup for Unfulfilled course list listGroup display:
	const unfulfilledListCourses = coursesNeeded.map((val)=>
		<ListGroup.Item variant = "dark" key ={val.id}>{val.name}</ListGroup.Item>
	);
	const fulfilledListCourses = coursesTaken.map((val)=>
		<ListGroup.Item variant = "dark" key ={val.id}>{val.name}</ListGroup.Item>
	);

	return <Row>
		<h1>Class List:</h1>
		<ListGroup horizontal className= "justify-content-center">{listCourses}</ListGroup>
		<h2>Unfulfilled Requirements:</h2>
		<ListGroup horizontal className= "justify-content-center">{unfulfilledListCourses}</ListGroup>
		<h2>Fulfilled Requirements:</h2>
		<ListGroup horizontal className= "justify-content-center">{fulfilledListCourses}</ListGroup>
	</Row>;
}