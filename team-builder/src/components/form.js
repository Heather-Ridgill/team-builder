import React, { useState } from "react";

import styled from "styled-components";

const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
  border-style: dashed;
  background-color: red;
  width: 30%;
  margin: auto;
  label {
    font-size: 22px;
    font-weight: bold;
  }
  input {
    font-weight: bold;
    font-size: 19px;
  }
  select {
    font-size: 19px;
  }
  button {
    font-size: 19px;
  }
`;

function Form(props) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "backend",
    id: ""
  });

  function changeHandler(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
  }

  return (
    <MemberForm onSubmit={submitForm}>
      <label htmlFor="name">Member Name</label>
      <input
        type="text"
        name="name"
        placeholder="Member Name"
        value={member.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Member Email</label>
      <input
        type="email"
        name="email"
        placeholder="Member Email"
        value={member.email}
        onChange={changeHandler}
      />

      <select name="role" onChange={changeHandler}>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="designer"> UX Designer</option>
        <option value="manager">Manager</option>
      </select>

      <button type="submit">Add Team Member</button>
    </MemberForm>
  );
}

export default Form;
