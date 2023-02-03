import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<circle cx='134' cy='136' r='125' />
		<rect x='0' y='290' rx='24' ry='24' width='275' height='32' />
		<rect x='0' y='342' rx='15' ry='15' width='280' height='88' />
		<rect x='1' y='451' rx='4' ry='4' width='95' height='30' />
		<rect x='125' y='444' rx='25' ry='25' width='152' height='45' />
	</ContentLoader>
);

export default Skeleton;
