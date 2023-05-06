import styled from "styled-components";

import { Button } from "greg-lib-1";
import "../../App.css";

const StyledDiv = styled.div`
  button {
    margin: 5%;
    width: 100px;
  }
`;

const App = () => {
  const handleClick = (
    event
  ) => {
    console.log("Button clicked");
  };
  return (
    <StyledDiv>
      <h5>Buttons:</h5>
      <label>Primary</label>
      <Button label="Primary" variant="primary" onClick={handleClick} />
      <label>Secondary</label>
      <Button label="Secondary" variant="secondary" onClick={handleClick} />
      <label>Outline</label>
      <Button label="Outline" variant="outline" onClick={handleClick} />
    </StyledDiv>
  );
};

export default App;
