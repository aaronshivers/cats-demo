import React, { useEffect, useState } from 'react';
import { List, Pagination } from 'grommet';
import useStore from '../store';
import Loading from './Loading';

function Facts() {
  const [currentPage, setCurrentPage] = useState(1);
  const facts = useStore((state) => state.facts);
  const fetchFacts = useStore((state) => state.fetchFacts);

  useEffect(() => {
    fetchFacts(currentPage);
  }, [currentPage]);

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
        onChange={({ page }) => setCurrentPage(page)}
        page={currentPage}
        step={facts.per_page}
      />
    </>
  );
}

export default Facts;
