import styled from "styled-components";
import { Button } from "greg-lib-1";

import UsageSection from "../../shared/Usage";
import "../../App.css";

const StyledDiv = styled.div`
  button {
    margin: 5%;
    width: 100px;
  }
`;

const Options = styled.div`
    display: flex;
  flex-direction: column;
`;

const OptionItem = styled.li`
  margin: 5px 0px 5px 0;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin: 8px 0 8px 0;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonPage = () => {
  const handleClick = (
    event
  ) => {
    console.log("event", event);
  };
  return (
    <StyledDiv>
      <label>Primary</label>
      <Button label="Primary" variant="primary" onClick={handleClick} />
      <label>Secondary</label>
      <Button label="Secondary" variant="secondary" onClick={handleClick} />
      <label>Outline</label>
      <Button label="Outline" variant="outline" onClick={handleClick} />
      <UsageSection
        // title="Usage:"
        codeSnippet={
          `import { Button } from "greg-lib-1";

<Button
  label="Click me"
  type="button"
  size="medium"
  variant="primary"
  onClick={handleClick}
/>`                 }
      >
        <Options>        <StyledOption>
          <Label>size</Label>
          <OptionItem>
            options: "small", "medium", "large".
          </OptionItem>
        </StyledOption>
          <StyledOption>
            <Label>variant</Label>
            <OptionItem>
              options: "primary", "secondary", "outline".
            </OptionItem>
          </StyledOption></Options>


      </UsageSection>
    </StyledDiv>
  );
};

export default ButtonPage;