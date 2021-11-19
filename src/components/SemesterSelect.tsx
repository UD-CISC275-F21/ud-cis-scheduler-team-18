
import React from "react";
import {Col} from "react-bootstrap";
import { Semester } from "../interfaces/semester";
export function SemesterSelect({sem}: {sem: Semester}): JSX.Element {
	return <Col>
		<h2>Semester Select</h2>
		<div>{sem.name}</div>
	</Col>;
}
