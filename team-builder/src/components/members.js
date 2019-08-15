import React, { useState } from "react";
import styled from "styled-components";

const NotMembers = styled.div`
  text-align: center;
`;

function TeamMember(props) {
  return (
    <div>
      {props.memberList.map(member => {
        return (
          <div key={member.id}>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TeamMember;
