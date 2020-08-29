import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
        axios
            .get("https://official-joke-api.appspot.com/random_joke")
            .then(response => {
                const { setup, punchline } = response.data;
                setSetup(setup);
                setPunchline(punchline);
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }, [sendRequest]);

    return (
        <div className="container">
            <div className="text">
                <h1>{setup}</h1>
                <h2>{punchline}</h2>
            </div>
            <button type="button" onClick={() => setSendRequest(true)}>
                MORE
            </button>
        </div>
    );
}

export default App;
