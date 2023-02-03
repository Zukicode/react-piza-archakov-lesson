import axios from 'axios';
import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<{
		imageUrl: string,
		title: string,
		price: number,
	}>();
	
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					`https://63c80c44e52516043f4a7d06.mockapi.io/items/${id}`
				);
				setPizza(data);
			} catch (error) {
				alert('Помилка');
				navigate('/');
			}
		}

		fetchData();
	}, []);

	if (!pizza) {
		return <div className='container' style={{fontSize: '21px'}}>Loading...</div>;
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} alt='pizza' width={'200px'} />
			<br />
			<h2>{pizza.title}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
				commodi amet assumenda culpa aut officiis dolor. Delectus, quis.
				Delectus commodi provident nihil quo eaque et mollitia vero, eius
				incidunt numquam.
			</p>
			<br />
			<h4>{pizza.price}</h4>
		</div>
	);
};

export default FullPizza;
