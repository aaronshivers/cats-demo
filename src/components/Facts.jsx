import React from 'react';
import { List } from 'grommet';
import PageWrapper from './PageWrapper';

const url = 'https://catfact.ninja/facts';

function Facts() {
  return (
    <PageWrapper url={url}>
      {({ data: facts }) => (
        <List
          data={facts.data}
        />
      )}
    </PageWrapper>
  );
}

export default Facts;
