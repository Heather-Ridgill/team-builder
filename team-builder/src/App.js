import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import styled from "styled-components";
import Member from "./components/members";
import Form from "./components/form";
import data from "./components/data";

function App() {
  const [teamMember, setTeamMember] = useState(data);

  const addNewMember = member => {
    console.log(member);
    setTeamMember([...teamMember, member]);
  };

  return (
    <div className="App">
      <h1>Please Enter in a Team Member </h1>
      <Form addNewMember={addNewMember} />
      <Member memberList={teamMember} />
    </div>
  );
}

export default App;
