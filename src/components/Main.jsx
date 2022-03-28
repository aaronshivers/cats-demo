import React from 'react';
import { Box, Tab, Tabs } from 'grommet';
import Facts from './Facts';
import Breeds from './Breeds';

function Main() {
  return (
    <Box flex margin={{ top: 'large', bottom: 'large' }}>
      <Tabs
        height="medium"
      >
        <Tab title="Facts">
          <Box margin="small" pad="medium">
            <Facts />
          </Box>
        </Tab>
        <Tab title="Breeds">
          <Box margin="small" pad="medium">
            <Breeds />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
}

export default Main;
