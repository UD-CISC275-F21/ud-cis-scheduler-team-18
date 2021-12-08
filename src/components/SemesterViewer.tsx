import React from "react";
import {Row} from "react-bootstrap";
import { Course } from "../interfaces/course";
//import {Semester} from "../interfaces/semester";
import { Semester } from "../interfaces/semester";
import { ListGroup } from "react-bootstrap";


export function SemesterViewer({sem}: {sem: Semester}): JSX.Element {
	/* Old versions of geting courseList return val....
	//setup for courselist val:
	let retval = "";
	for(const x in sem.courseLoad){
		retval += sem.courseLoad[x].name + "\n, ";
	}
	//
	let courses: string[] = [];
	for(const x in sem.courseLoad){
		courses = [...courses, sem.courseLoad[x].name];
	}
	
	const listCourses = courses.map((string) => 
		<li key={string.length}>{string}</li>
	);
	*/


	//setup for credits val:
	let credits = 0;
	for(const x in sem.courseLoad){
		credits += sem.courseLoad[x].credits;
	}
	/*
	//setup for courses ordered list:
	let courses: Course[] = [];
	courses = sem.courseLoad;
	const listCourses = courses.map((val)=>
		<li key ={val.id}>{val.name}</li>
	);
*/

	let courses: Course[] = [];
	courses = sem.courseLoad;
	const listCourses = courses.map((val)=>
		<ListGroup.Item variant = "dark" key ={val.id}>{val.name}</ListGroup.Item>
	);

	return <Row>
		<h2>Semesters:</h2>
		<h5>Total Credits: {credits}</h5>
		<h6>{sem.semName}</h6>
		<ListGroup>{listCourses}</ListGroup>
	</Row>;
}