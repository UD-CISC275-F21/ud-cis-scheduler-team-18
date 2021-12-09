import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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