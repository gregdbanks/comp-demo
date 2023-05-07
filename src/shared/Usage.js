import React from "react";
import styled from "styled-components";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const UsageSectionWrapper = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 1%;
  text-align: left;
`;

const OptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const UsageSection = ({ title, codeSnippet, children }) => {
    return (
        <UsageSectionWrapper>
            <h5>{title}</h5>
            <SyntaxHighlighter
                language="jsx"
                style={nightOwl}
                customStyle={{ fontSize: "0.9em", textAlign: "left" }}
            >
                {codeSnippet}
            </SyntaxHighlighter>
            <OptionsList>{children}</OptionsList>
        </UsageSectionWrapper>
    );
};

export default UsageSection;
