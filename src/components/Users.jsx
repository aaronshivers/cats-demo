import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
	const { data } = useFetch(url);

	return (
		<ul>
			{
        data.map(({ id, name }) => (
            <li key={id}>{name}</li>
          )
        )
      }
		</ul>
	);
};

export default Users;
