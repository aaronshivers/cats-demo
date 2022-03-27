import React, { useState } from 'react';
import { List, Pagination } from 'grommet';
import useSWR from 'swr';
import Loading from './Loading';
import fetcher from '../utils/fetcher';

const url = 'https://catfact.ninja/facts';

function Facts() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data: facts } = useSWR(`${url}?page=${pageIndex}`, fetcher);

  if (!facts?.data) {
    return <Loading />;
  }

  return (
    <>
      <List
        data={facts.data}
      />
      <Pagination
        alignSelf="end"
        margin="medium"
        numberItems={facts.total}
        onChange={({ page }) => setPageIndex(page)}
        page={pageIndex}
        step={facts.per_page}
      />
    </>
  );
}

export default Facts;
