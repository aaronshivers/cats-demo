import React from 'react';
import { Box, Spinner } from 'grommet';

function Loading() {
  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      gap="small"
      pad="small"
    >
      <Spinner
        margin="large"
        size="large"
      />
    </Box>
  );
}

export default Loading;
