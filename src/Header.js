import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <header>
      <a hrer="#">Home</a> Hello, {context.name}
    </header>
  );
};

export default Header;
