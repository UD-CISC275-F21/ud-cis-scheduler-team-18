
import React from "react";
import {Col} from "react-bootstrap";
import { Course } from "../interfaces/course";
export function CourseViewer({card}: {card: Course}): JSX.Element {
	return <Col>
		<h2>Class Select</h2>
		<div>Class: {card.name}</div>
	</Col>;
}
