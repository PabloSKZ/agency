import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Works = () => {
  const clientNames = ["PLATON", "Solane", "Sedal"];

  return (
    <div>
      <h1>Works</h1>
      <h2>
        <FormattedMessage id="works.title" />
      </h2>
      <p>
        <FormattedMessage id="works.paragraph" />
      </p>
      <ul>
        {clientNames.map((name, id) => (
          <li key={id}>
            <Link to={`/works/${name}-study-case`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
