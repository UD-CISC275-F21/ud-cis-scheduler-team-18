
import React from "react";
import {Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
export function CourseViewer({course}: {course: Course}): JSX.Element {
	return <Col>
		<h2>Class Select</h2>
		<div>Class: {course.name}</div>
		<div>Professor: {course.prof}</div>
		<div>Prereq: {course.prereq}</div>
	</Col>;
}
