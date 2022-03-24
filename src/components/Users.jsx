import React, { useEffect } from 'react';
import useStore from '../store';

const Users = () => {
	const users = useStore(state => state.users);
	const fetchUsers = useStore(state => state.fetchUsers);

	useEffect(() => {
		if (!users.length) {
			fetchUsers();
		}
	}, []);

	return (
		<ul>
			{
				users.map(({ id, name }) => (
						<li key={id}>{name}</li>
					)
				)
			}
		</ul>
	);
};

export default Users;
