import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
	return (
		<div className='cart cart--empty'>
			<h2>
				Корзина пуста <span>😕</span>
			</h2>
			<p>
				Скоріше за все, ви не заказали ще піцу.
				<br />
				Для того, щоб заказати піцу, перейдіть на головну сторінку.
			</p>
			<img src={emptyCart} alt='Empty cart' />
			<Link to='/' className='button button--black'>
				<span>Вернутися назад</span>
			</Link>
		</div>
	);
};

export default CartEmpty;
