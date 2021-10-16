import React from 'react';
import TableComponent from '../../common components/table';
import { data, fields } from '../../tools/data';

const InsectClean = () => {
	return (
		<div>
			<TableComponent fields={fields} data={data} />
		</div>
	);
};

export default InsectClean;
