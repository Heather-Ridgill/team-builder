import React, { useState } from "react";
import styled from "styled-components";

const NotMembers = styled.div`
  text-align: center;
`;

const Members = ({ team }) => {
  //state
  if (!team.team) {
    return <NotMembers>You have no Team Members yet!</NotMembers>;
  }

  return <div>List of Members will go here.</div>;
};

export default Members;
