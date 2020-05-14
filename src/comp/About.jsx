import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>
        <FormattedMessage id="about.title" />
      </h2>
      <p>
        <FormattedMessage id="about.paragraph" />
      </p>
    </div>
  );
};

export default About;
