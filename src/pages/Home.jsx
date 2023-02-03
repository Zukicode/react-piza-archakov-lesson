import React from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
	setCategoryId,
	setPagecount,
	setSortId,
} from '../redux/filterSlice/filterSlice';
import { fetchPizzas } from '../redux/pizzasSlice/pizzasSlice';

//Components filter
import Categories from '../components/Categories';
import Sort from '../components/Sort';

//Pizza Components
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Paginate from '../components/Paginate/Paginate';
import { Link } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();
	const { items, status } = useSelector(state => state.pizzas);

	const { categoryId, sort, currentPage, searchValue } = useSelector(
		state => state.filter
	);
	const onChangeCategoryId = select => {
		dispatch(setCategoryId(select));
	};

	const onChangeSortId = select => {
		dispatch(setSortId(select));
	};

	//PizzaItems

	const getPizzas = async () => {
		const search = searchValue ? `search=${searchValue}` : '';
		const categorys = categoryId > 0 ? `category=${categoryId}` : '';
		const sorts = sort.sortId > 0 ? `sortBy=${sort.sortBy[sort.sortId]}` : '';

		dispatch(fetchPizzas({ search, categorys, sorts, currentPage }));
	};

	//Pagination
	const onChangePage = number => {
		dispatch(setPagecount(number));
	};

	//Get from API pizzas
	React.useEffect(() => {
		getPizzas();
	}, [categoryId, sort.sortId, sort.sortBy, searchValue, currentPage]);

	const pizzas = items.map(pizzasElement => {
		return (
			<Link key={pizzasElement.id} to={`/pizza/${pizzasElement.id}`}>
				<PizzaBlock {...pizzasElement} />
			</Link>
		);
	});

	const skeleton = [...new Array(6)].map((_, index) => {
		return <Skeleton key={index} />;
	});

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					categoryId={categoryId}
					onChangeCategoryId={onChangeCategoryId}
				/>
				<Sort {...sort} onChangeSortId={onChangeSortId} />
			</div>
			<h2 className='content__title'>Всі піци</h2>
			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>Сталася помилка😕</h2>
					<p>Не вдалося получити піци. Спробуйте пізніше!</p>
				</div>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeleton : pizzas}
				</div>
			)}

			<Paginate value={currentPage} setCurrentPage={onChangePage} />
		</div>
	);
};

export default Home;
