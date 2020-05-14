import React from "react";
import { FormattedMessage } from "react-intl";

const StudyCase = ({ match }) => {
  const clientName = match.params.client.split("-")[0];

  return (
    <div>
      <h1>{clientName}</h1>
      <h3>
        <FormattedMessage id={`${clientName.toLowerCase()}.title`} />
      </h3>
      <p>
        <FormattedMessage id={`${clientName.toLowerCase()}.paragraph`} />
      </p>
    </div>
  );
};

export default StudyCase;
