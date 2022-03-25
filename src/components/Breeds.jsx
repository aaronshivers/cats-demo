import React, { useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableHeader, TableRow,
} from 'grommet';
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
    <Table>
      <TableHeader>
        <TableRow>
          {
            breeds?.data ? (
              Object.keys(breeds?.data[0]).map((key) => (
                <TableCell scope="col" border="bottom" key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
              ))
            ) : null
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          breeds?.data.map(({
            breed, country, origin, coat, pattern,
          }) => (
            <TableRow key={breed}>
              <TableCell scope="row"><strong>{breed}</strong></TableCell>
              <TableCell>{country}</TableCell>
              <TableCell>{origin}</TableCell>
              <TableCell>{coat}</TableCell>
              <TableCell>{pattern}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

export default Breeds;
