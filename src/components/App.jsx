import React from 'react';
import { Box, Grommet, Heading } from 'grommet';
import theme from '../theme';
import AppBar from './AppBar';
import Main from './Main';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">Cat Facts</Heading>
        </AppBar>
        <Main />
      </Box>
    </Grommet>
  );
}

export default App;
