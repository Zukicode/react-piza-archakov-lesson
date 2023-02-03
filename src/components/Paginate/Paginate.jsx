import React from 'react';
import ReactPaginate from 'react-paginate';

import classes from './Paginate.module.scss';

const Paginate = ({ value, setCurrentPage }) => {
	return (
		<ReactPaginate
			className={classes.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={e => setCurrentPage(e.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={3}
			forcePage={value - 1}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Paginate;
