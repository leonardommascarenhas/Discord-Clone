import React, { useEffect } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { AuthContext } from "./Providers/auth";

const Online = () => {
  const { count } = React.useContext(AuthContext);

  return (
    <>
      <div>ONLINE - {count}</div>
      <div className="h-20 w-20">
        <OnlinePerson profilePics={<BsLightbulbFill />} name={"Nyels"} status={"Ausente"} />
        <OnlinePerson profilePics={<FaPoo />} name={"Pou Lords"} status={"Ausente"} />
      </div>
    </>
  );
};

const OnlinePerson = ({ profilePics, name, status }) => {
  const { setCount } = React.useContext(AuthContext);
  useEffect(() => {
    setCount((current) => current + 1);
  }, []);

  return (
    <div>
      {profilePics}
      {name}
      {status}
    </div>
  );
};

export default Online;
