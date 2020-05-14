import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Nav = ({ changeLang, actualLang }) => {
  return (
    <h1>
      <Link to="/">
        <Button type="primary">Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/works">
        <Button type="dashed">Works</Button>
      </Link>
      <span onClick={changeLang}>{actualLang()}</span>
    </h1>
  );
};

export default Nav;
