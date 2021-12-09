import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";
//basic screen text rendering tests:
test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Course List", () => {
	render(<App />);
    const linkElement = screen.getByText(/Course List:/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Fulfilled Requirements and unfulfilled requirements", () => {
	render(<App />);
    const linkElement = screen.getAllByText(/Fulfilled Requirements:/i);
    expect(linkElement[0]).toBeInTheDocument();
	expect(linkElement[1]).toBeInTheDocument();
});

test("renders Control Panel", () => {
	render(<App />);
    const linkElement = screen.getByText(/Control Panel/i);
    expect(linkElement).toBeInTheDocument();
});

test("Class Select", () => {
	render(<App />);
    const linkElement = screen.getByText(/Class Select/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Semester Viewer", () => {
	render(<App />);
    const linkElement = screen.getByText(/Semesters:/i);
    expect(linkElement).toBeInTheDocument();
});

//more tests:

test("renders all 11 buttons for the control panel", () =>{
	render(<App />);
	const linkElement = document.querySelectorAll("Button");
	expect(linkElement).toHaveLength(11);
	expect(linkElement[0]).toHaveTextContent("Previous Class");
	expect(linkElement[1]).toHaveTextContent("Add Class");
	expect(linkElement[2]).toHaveTextContent("Remove Class");
	expect(linkElement[3]).toHaveTextContent("Next Class");
	expect(linkElement[4]).toHaveTextContent("Previous Semester");
	expect(linkElement[5]).toHaveTextContent("Add Semester");
	expect(linkElement[6]).toHaveTextContent("Clear Semester");
	expect(linkElement[7]).toHaveTextContent("Next Semester");
	expect(linkElement[8]).toHaveTextContent("Rename Semester");
	expect(linkElement[9]).toHaveTextContent("Remove Semester");
	expect(linkElement[10]).toHaveTextContent("Reset Semester");
});

test("renders 3 listGroups that are horizontal", () => {
	render(<App />);
	const linkElement = document.querySelectorAll("div");
	let listGroups = 0;
	for(const x in linkElement){
		if(linkElement[x].className == "justify-content-center list-group list-group-horizontal"){
			listGroups++;
		}
	}
	expect(listGroups).toEqual(3);
});

test("renders 1 normal listGroup", () => {
	render(<App />);
	const linkElement = document.querySelectorAll("div");
	let listGroups = 0;
	for(const x in linkElement){
		if(linkElement[x].className == "list-group"){
			listGroups++;
		}
	}
	expect(listGroups).toEqual(1);
});

test("add class button and remove class button", () => {
    render(<App />);
	let listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(8);
    const button = screen.getByText(/Add Class/i);
	button.click();
	listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(9);
	const button2 = screen.getByText(/Remove Class/i);
	button2.click();
	listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(8);
});

test("testing clear semester button", () => {
	render(<App />);
	let listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(8);
	const addButton = screen.getByText(/Add Class/i);
	const nextButton = screen.getByText(/Next Class/i);
	addButton.click();
	nextButton.click();
	addButton.click();
	nextButton.click();
	addButton.click();
	nextButton.click();
	addButton.click();
	nextButton.click();
	listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(12);
	const clearSemButton = screen.getByText(/Clear Semester/i);
	clearSemButton.click();
	listItems = document.getElementsByClassName("list-group-item list-group-item-dark");
	expect(listItems).toHaveLength(8);
});

test("snapshot testing", () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
	
});