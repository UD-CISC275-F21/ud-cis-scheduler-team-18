import React from "react";
import logo from "./logo.svg";
import "./App.css";
//change 2
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler:
                Justin Anthony,
                Luis Garcia Osorio,
                Andrew McCracken

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

            </header>
        </div>
    );
}

export default App;