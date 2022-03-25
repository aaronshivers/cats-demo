import React, { useEffect } from 'react';
import { List } from 'grommet';
import useStore from '../store';

function Facts() {
  const facts = useStore((state) => state.facts);
  const fetchFacts = useStore((state) => state.fetchFacts);

  useEffect(() => {
    if (!facts?.data) {
      fetchFacts();
    }
  }, [facts, fetchFacts]);

  return (
    <List
      data={facts?.data}
    />
  );
}

export default Facts;
