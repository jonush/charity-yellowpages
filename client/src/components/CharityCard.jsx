import React from "react";

const CharityCard = ({ charity }) => {
  return (
    <div>
      <h2>{charity.charityName}</h2>
      <h3>{charity.irsClassification.nteeType}</h3>
      <h3>{charity.mailingAddress.streetAddress1}</h3>
      <h3>
        {charity.mailingAddress.city}, {charity.mailingAddress.stateOrProvince}{" "}
        {charity.mailingAddress.postalCode}
      </h3>
    </div>
  );
};

export default CharityCard;
