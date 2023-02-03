import React from 'react';
import debounce from 'lodash.debounce';
import classes from './Search.module.scss';

import { setSearchValue } from '../../redux/filterSlice/filterSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
	const dispatch = useDispatch();
	const [value, setValue] = React.useState('');

	const inputRef = React.useRef();

	const updateSearch = React.useCallback(
		debounce(str => {
			dispatch(setSearchValue(str));
		}, 350),
		[]
	);

	const onClickClear = () => {
		dispatch(setSearchValue(''));
		setValue('');
		inputRef.current.focus();
	};

	const onChangeInput = e => {
		updateSearch(e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className={classes.root}>
			<svg version='1.1' viewBox='0 0 512 512' className={classes.searchIcon}>
				<path d='M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z' />
			</svg>
			<input
				ref={inputRef}
				type='text'
				value={value}
				onChange={onChangeInput}
				className={classes.input}
				placeholder='Пошук'
			/>
			{value ? (
				<svg
					enableBackground='new 0 0 32 32'
					version='1.1'
					viewBox='0 0 32 32'
					className={classes.clearIcon}
					onClick={onClickClear}>
					<g>
						<polyline
							fill='none'
							points='   649,137.999 675,137.999 675,155.999 661,155.999  '
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit='10'
							strokeWidth='2'
						/>
						<polyline
							fill='none'
							points='   653,155.999 649,155.999 649,141.999  '
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit='10'
							strokeWidth='2'
						/>
						<polyline
							fill='none'
							points='   661,156 653,162 653,156  '
							stroke='#FFFFFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit='10'
							strokeWidth='2'
						/>
					</g>
					<g>
						<path d='M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z' />
						<path d='M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z' />
					</g>
				</svg>
			) : (
				''
			)}
		</div>
	);
};

export default Search;
