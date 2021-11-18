//imports
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
//assets
import classList from "./assets/classList.json";
import semesterList from "./assets/semesterList.json";
//components
import { ClassViewer } from "./components/CardViewer";
import { ControlPanel } from "./components/ControlPanel";
import { SemesterViewer } from "./components/SemesterViewer";
import { ClassListViewer } from "./components/ClassListViewer";
import { SemesterSelect } from "./components/SemesterSelect";
//interfaces
import { Card } from "./interfaces/card";
import { Semester } from "./interfaces/semester";






function App (): JSX.Element {
	//semester use states
	const [activeSemester, setActiveSemester] = useState<Semester>(semesterList[0]);
	const [activeSemesterID, setActiveSemesterID] = useState<number>(0);
	//class use states
	const [classListSize] = useState<number>(classList.length);
	const [activeCard, setActiveCard] = useState<Card>(classList[0]);
	const [activeID, setActiveID] = useState<number>(0);
	return (
		<Container className="App">
			<ClassListViewer></ClassListViewer>
			<Row>
				<ControlPanel setCard={setActiveCard} ID = {activeID} setID = {setActiveID} listSize = {classListSize}></ControlPanel>
				<ClassViewer card ={activeCard}></ClassViewer>
				<SemesterSelect></SemesterSelect>
			</Row>
			<SemesterViewer></SemesterViewer>
		</Container>
	);
  
}

export default App;
