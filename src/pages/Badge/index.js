import React from 'react';

import { Badge } from 'greg-lib-1';
import '../../App.css';

const BadgePage = () => {
  return (
    <>
      <h1>A notification badge:</h1>
      <Badge value={3} />
    </>
  );
};

export default BadgePage;
