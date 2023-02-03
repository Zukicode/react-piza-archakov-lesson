import React from 'react';

const Categories = ({ categoryId, onChangeCategoryId }) => {
  const categories = ['Все', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategoryId(i)}
              className={categoryId === i ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
