import React from "react";

import Beer from "./Beer";

const BeerComponent = ({ description, image_url, name, tagline }) => (
  <Beer>
    <Beer.Image source={image_url} />
    <Beer.Content>
      <Beer.Name>{name}</Beer.Name>
      <Beer.Tagline>{tagline}</Beer.Tagline>
      <Beer.Description>{description}</Beer.Description>
    </Beer.Content>
  </Beer>
);

export default BeerComponent;
