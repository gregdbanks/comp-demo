import { useState } from 'react';
import * as d3 from 'd3';
import { BarChart } from 'greg-lib-1';
import styled from "styled-components";

import '../../App.css';
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

const colorInterpolators = [
  { name: 'Viridis', interpolator: d3.interpolateViridis },
  { name: 'Inferno', interpolator: d3.interpolateInferno },
  { name: 'Magma', interpolator: d3.interpolateMagma },
  { name: 'Plasma', interpolator: d3.interpolatePlasma },
  { name: 'Warm', interpolator: d3.interpolateWarm },
  { name: 'Cool', interpolator: d3.interpolateCool },
  { name: 'Rainbow', interpolator: d3.interpolateRainbow },
  { name: 'CubehelixDefault', interpolator: d3.interpolateCubehelixDefault },
  { name: 'Blues', interpolator: d3.interpolateBlues },
  { name: 'Greens', interpolator: d3.interpolateGreens },
  { name: 'Greys', interpolator: d3.interpolateGreys },
  { name: 'Oranges', interpolator: d3.interpolateOranges },
  { name: 'Purples', interpolator: d3.interpolatePurples },
  { name: 'Reds', interpolator: d3.interpolateReds },
  { name: 'BrBG', interpolator: d3.interpolateBrBG },
  { name: 'PRGn', interpolator: d3.interpolatePRGn },
  { name: 'PiYG', interpolator: d3.interpolatePiYG },
  { name: 'PuOr', interpolator: d3.interpolatePuOr },
  { name: 'RdBu', interpolator: d3.interpolateRdBu },
  { name: 'RdGy', interpolator: d3.interpolateRdGy },
  { name: 'RdYlBu', interpolator: d3.interpolateRdYlBu },
  { name: 'RdYlGn', interpolator: d3.interpolateRdYlGn },
  { name: 'Spectral', interpolator: d3.interpolateSpectral },
];

const testData = [
  {
    timestamp: '2023-01-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [12, 7, 15, 9, 6],
  },
  {
    timestamp: '2023-02-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [18, 10, 20, 13, 8],
  },
  {
    timestamp: '2023-03-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [22, 14, 25, 17, 12],
  },
  {
    timestamp: '2023-04-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [30, 18, 28, 21, 14],
  },
  {
    timestamp: '2023-05-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [35, 22, 31, 25, 17],
  },
  {
    timestamp: '2023-06-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [40, 28, 37, 30, 20],
  },

  {
    timestamp: '2023-07-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [12, 7, 15, 9, 6],
  },
  {
    timestamp: '2023-08-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [18, 10, 20, 13, 8],
  },
  {
    timestamp: '2023-09-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [22, 14, 25, 17, 12],
  },
  {
    timestamp: '2023-10-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [30, 18, 28, 21, 14],
  },
  {
    timestamp: '2023-11-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [35, 22, 31, 25, 17],
  },
  {
    timestamp: '2023-12-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [40, 28, 37, 30, 20],
  },

  {
    timestamp: '2024-01-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [12, 7, 15, 9, 6],
  },
  {
    timestamp: '2024-02-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [18, 10, 20, 13, 8],
  },
  {
    timestamp: '2024-03-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [22, 14, 25, 17, 12],
  },
  {
    timestamp: '2024-04-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [30, 18, 28, 21, 14],
  },
  {
    timestamp: '2024-05-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [35, 22, 31, 25, 17],
  },
  {
    timestamp: '2024-06-01',
    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
    values: [40, 28, 37, 30, 20],
  },
];

const BarchartPage = () => {
  const [colorInterpolator, setColorInterpolator] = useState('Blues');

  const selectedInterpolator = colorInterpolators.find(
    (ci) => ci.name === colorInterpolator
  );
  return (
    <div style={{ width: '100%', position: 'relative' }}>

      <BarChart
        width="100%"
        height={600}
        data={testData}
        colorInterpolator={
          selectedInterpolator?.interpolator || d3.interpolateBlues
        }
      />

      <UsageSection
        // title="Usage:"
        codeSnippet={
          `import { BarChart } from "greg-lib-1";

// const testData = [  {    timestamp: '2023-01-01',    names: ['Maverick', 'Goose', 'Iceman', 'Viper', 'Jester'],
//  values: [12, 7, 15, 9, 6],
//  },
// ];

<BarChart
  width="100%"
  height={600}
  data={testData}
  colorInterpolator={selectedInterpolator?.interpolator || d3.interpolateBlues}
/>` }
      >
        <Options>
          <StyledOption>
            <Label>width</Label>
            <OptionItem>
              The width of the bar chart. Accepts any valid CSS width value.
            </OptionItem>
          </StyledOption>
          <StyledOption>
            <Label>height</Label>
            <OptionItem>
              The height of the bar chart in pixels.
            </OptionItem>
          </StyledOption>
          <StyledOption>
            <Label>data</Label>
            <OptionItem>
              The data to be visualized. Must be an array of objects, where each object represents a timestamp and contains an array of names and an array of values.
            </OptionItem>
          </StyledOption>
          <StyledOption>
            <Label>colorInterpolator</Label>
            <OptionItem>
              The color interpolator to use for the chart. Accepts a D3 color interpolator function or a string representing one of the available color interpolators (e.g. "Blues", "Greens", "Reds").
            </OptionItem>
          </StyledOption>
        </Options>
      </UsageSection>
    </div>
  );
};

export default BarchartPage;
