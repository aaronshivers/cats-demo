import React, { useState } from 'react';
import { Pagination } from 'grommet';
import useSWR from 'swr';
import PropTypes from 'prop-types';
import Loading from './Loading';

const propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

const fetcher = (url) => fetch(url).then((res) => res.json());

function PageWrapper({ children, url }) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSWR(`${url}?page=${pageIndex}`, fetcher);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      {children({ data })}
      <Pagination
        alignSelf="end"
        margin="medium"
        numberItems={data.total}
        onChange={({ page }) => setPageIndex(page)}
        page={pageIndex}
        step={data.per_page}
      />
    </>
  );
}

PageWrapper.propTypes = propTypes;

export default PageWrapper;
