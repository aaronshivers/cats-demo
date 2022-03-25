import React, { useState } from 'react';
import {
  Box, Button, Collapsible, Grommet, Heading, Layer, ResponsiveContext,
} from 'grommet';
import { Menu, FormClose, Notification } from 'grommet-icons';
import Facts from './components/Facts';
import Breeds from './components/Breeds';
import theme from './theme';
import AppBar from './components/AppBar';

const FACTS = 0;
const BREEDS = 1;

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [view, setView] = useState(null);

  const handleFactsButtonClick = () => setView(FACTS);
  const handleBreedsButtonClick = () => setView(BREEDS);

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
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
              <Box flex align="center" justify="center">
                <button type="button" onClick={handleFactsButtonClick}>Facts</button>
                <button type="button" onClick={handleBreedsButtonClick}>Breeds</button>
                {
                  view === FACTS ? <Facts /> : null
                }
                {
                  view === BREEDS ? <Breeds /> : null
                }
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
