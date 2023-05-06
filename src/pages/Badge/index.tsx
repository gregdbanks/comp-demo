import { FC } from 'react';

import Badge from '../../../lib/components/Badge';

import '../../App.css';

const App: FC = () => {
  return (
    <>
      <h1>A notification badge:</h1>
      <Badge value={3} />
    </>
  );
};

export default App;
