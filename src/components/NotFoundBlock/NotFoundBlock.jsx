import React from 'react';
import classes from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={classes.root}>
			<h1>
				<span>😞</span> <br />
				Нічого не знайдено!
			</h1>
			<p className={classes.description}>Нажаль ця строінка не існує на нашому сайті.</p>
		</div>
	);
};

export default NotFoundBlock;
