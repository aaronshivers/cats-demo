import React, { useEffect } from 'react';
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
    <ul>
      {
        facts?.data.map(({ fact }) => (
          <li key={fact}>{fact}</li>
        ))
      }
    </ul>
  );
}

export default Facts;
