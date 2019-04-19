import styled from "styled-components";
import { rem } from "polished";

const Beer = styled.article`
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  font-size: ${rem(14)};
`;

Beer.Image = styled.div`
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url(${props => props.source});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto ${rem(64)};
  border-radius: ${rem(64)};
  height: ${rem(64)};
  padding: ${rem(16)};
  margin-bottom: ${rem(16)};
  margin-left: ${rem(16)};
  margin-top: ${rem(16)};
  width: ${rem(64)};
`;

Beer.Content = styled.div`
  flex: 1;
  padding: ${rem(16)};
`;

Beer.Name = styled.h1`
  font-size: ${rem(16)};
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.15;
  margin-bottom: ${rem(2)};
  margin-top: 0;
`;

Beer.Tagline = styled.div`
  font-size: ${rem(12)};
  margin-bottom: ${rem(8)};
`;

Beer.Description = styled.div`
  font-size: ${rem(14)};
  line-height: 1.3;
`;

export default Beer;
