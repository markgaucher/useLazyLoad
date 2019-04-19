import React from "react";

import Beer from "../Beer";
import BeerList from "./BeerList";

const BeerListComponent = ({ beerList }) => (
  <BeerList>
    {beerList.map(beer => (
      <BeerList.Item key={beer.id}>
        <Beer {...beer} />
      </BeerList.Item>
    ))}
  </BeerList>
);

export default BeerListComponent;
