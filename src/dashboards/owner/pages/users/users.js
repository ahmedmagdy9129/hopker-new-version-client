import React from 'react';
import TableComponent from '../../common components/table';
import { data, fields } from '../../tools/data';

const Users = () => {
	return (
		<div>
			<TableComponent fields={fields} data={data} />
		</div>
	);
};

export default Users;
