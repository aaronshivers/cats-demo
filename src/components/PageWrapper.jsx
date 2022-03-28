import React, { useState } from 'react';
import { Pagination } from 'grommet';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import Loading from './Loading';

const propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

function PageWrapper({ children, url }) {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useFetch(`${url}?page=${pageIndex}`);

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
