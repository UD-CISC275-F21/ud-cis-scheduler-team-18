
import React from "react";
import {Col} from "react-bootstrap";
import { Card } from "../Interfaces/card";
export function ClassViewer({card}: {card: Card}): JSX.Element {
	return <Col>
		<h2>Class Select</h2>
		<div>Class: {card.name}</div>
	</Col>;
}
