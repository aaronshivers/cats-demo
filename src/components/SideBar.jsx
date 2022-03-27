import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  setShowSidebar: PropTypes.func.isRequired,
};

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

SideBar.propTypes = propTypes;

export default SideBar;
