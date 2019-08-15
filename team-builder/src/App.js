import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import styled from "styled-components";
import member from "./components/members";
import form from "./components/form";

function App() {
  const [team, setTeam] = useState(false);

  return (
    <div className="App">
      <h1>Please enter a Team Member</h1>
      <form />
      <members team={team} />
    </div>
  );
}

export default App;
