
import React from "react";
import {Col} from "react-bootstrap";
import { Card } from "../interfaces/card";
export function ClassViewer({card}: {card: Card}): JSX.Element {
	return <Col>
		<h2>Class Viewer</h2>
		<div>Class: {card.name}</div>
	</Col>;
}
