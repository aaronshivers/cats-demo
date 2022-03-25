import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';

function SideBar({ setShowSidebar }) {
  return (
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
  );
}

export default SideBar;
