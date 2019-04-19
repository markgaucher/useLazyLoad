import styled from "styled-components";
import { rem } from "polished";

const BeerList = styled.ul`
  list-style-type: none;
  margin: ${rem(16)};
  padding-left: 0;
`;

BeerList.Item = styled.li`
  margin-bottom: 0;

  &:not(:last-child) {
    margin-bottom: ${rem(8)};
  }
`;

export default BeerList;
