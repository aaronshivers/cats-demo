import React, { useState } from 'react';
import {
  Pagination, Table, TableBody, TableCell, TableHeader, TableRow,
} from 'grommet';
import useSWR from 'swr';
import Loading from './Loading';
import fetcher from '../utils/fetcher';

const url = 'https://catfact.ninja/breeds';

function Breeds() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data: breeds } = useSWR(`${url}?page=${pageIndex}`, fetcher);

  const renderTable = () => {
    if (!breeds?.data) {
      return <Loading />;
    }

    return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              {
                breeds?.data ? (
                  Object.keys(breeds?.data[0]).map((key) => (
                    <TableCell scope="col" border="bottom" key={key}>
                      {key.charAt(0)
                        .toUpperCase() + key.slice(1)}
                    </TableCell>
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
        <Pagination
          alignSelf="end"
          margin="medium"
          numberItems={breeds.total}
          onChange={({ page }) => setPageIndex(page)}
          page={pageIndex}
          step={breeds.per_page}
        />
      </>
    );
  };

  return renderTable();
}

export default Breeds;
