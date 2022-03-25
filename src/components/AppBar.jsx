/* eslint-disable react/jsx-props-no-spreading */
import { Box } from 'grommet';
import React from 'react';

function AppBar(props) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    />
  );
}

export default AppBar;
