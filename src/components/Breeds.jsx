import React, { useEffect } from 'react';
import useStore from '../store';

function Breeds() {
  const breeds = useStore((state) => state.breeds);
  const fetchBreeds = useStore((state) => state.fetchBreeds);

  useEffect(() => {
    if (!breeds?.data) {
      fetchBreeds();
    }
  }, []);
  return (
    <ul>
      {
        breeds?.data.map(({
          breed, country, origin, coat, pattern,
        }) => (
          <li key={breed}>
            {breed}
            {' '}
            -
            {' '}
            {country}
          </li>
        ))
      }
    </ul>
  );
}

export default Breeds;
