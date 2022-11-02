import React, { useState } from "react";

export const AuthContext = React.createContext(0);

export const AuthProvider = (props) => {
  const [count, setCount] = useState(0);

  return <AuthContext.Provider value={{ count, setCount }}>{props.children}</AuthContext.Provider>;
};
