import React, { UseState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";

const Online = () => {
  <>
    <div>ONLINE - {count}</div>
    <OnlinePerson profilePic={BsLightbulbFill} name={"Nyels"} status={"Ausente"} />
  </>;
};

const OnlinePerson = ({ profilePic, name, status }) => {
  <div></div>;
};

export default Online;
