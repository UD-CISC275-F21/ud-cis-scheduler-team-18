import React from "react";
import logo from "./logo.svg";
import "./App.css";
//change 2
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                    This is Luis's edit to confirm everything is working.
                </p>
            </header>
        </div>
    );
}

export default App;
