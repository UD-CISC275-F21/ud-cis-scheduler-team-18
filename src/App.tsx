import React, { useState } from "react";
import "./App.css";
import classList from "./assets/classList.json";
import { ClassViewer } from "./components/CardViewer";
import { ControlPanel } from "./components/ControlPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
import { Card } from "./interfaces/card";
import { SemesterViewer } from "./components/SemesterViewer";
import { ClassListViewer } from "./components/ClassListViewer";




function App (): JSX.Element {
	let classListSize = classList.length;
	classListSize++;
	classListSize--;
	
	const [activeCard, setActiveCard] = useState<Card>(classList[0]);
	const [activeID, setActiveID] = useState<number>(0);
	return (
		<Container className="App">
			<ClassListViewer></ClassListViewer>
			<Row>
				<ControlPanel setCard={setActiveCard} ID = {activeID} setID = {setActiveID}></ControlPanel>
				<ClassViewer card ={activeCard}></ClassViewer>
			</Row>
			<SemesterViewer></SemesterViewer>
		</Container>
	);
  
}

export default App;
