import React from "react";
import { Table } from "greg-lib-1";
import styled from "styled-components";

import UsageSection from "../../shared/Usage";

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

const userData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const columns = [
  { key: "id", header: "ID", sortable: true },
  { key: "name", header: "Name", sortable: true },
  { key: "age", header: "Age", sortable: true },
];

const TablePage = () => {
  return (
    <>


      <Table data={userData} columns={columns} />
      <UsageSection
        codeSnippet={`import { Table } from "greg-lib-1";

const userData = [
  { id: 1, name: "Alice", age: 30 },
  // ...
];

const columns = [
  { key: "id", header: "ID", sortable: true },
  { key: "name", header: "Name", sortable: true },
  { key: "age", header: "Age", sortable: true },
];

<Table data={userData} columns={columns} />`}
      >
        <Options>
          <StyledOption>
            <Label>data</Label>
            <OptionItem>An array of objects containing the data to display in the table.</OptionItem>
          </StyledOption>
          <StyledOption>
            <Label>columns</Label>
            <OptionItem>
              An array of column configurations with keys: "key", "header", and "sortable".
            </OptionItem>
          </StyledOption>
        </Options>
      </UsageSection>
    </>
  );
};

export default TablePage;
