import React, { useState } from 'react';
import {
  Box, Button, Collapsible, Grommet, Heading, ResponsiveContext,
} from 'grommet';
import { Menu } from 'grommet-icons';
import theme from './theme';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
              <Heading level="3" margin="none">Cat Facts</Heading>
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <SideBar setShowSidebar={setShowSidebar} />
              )}
              <Main />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
