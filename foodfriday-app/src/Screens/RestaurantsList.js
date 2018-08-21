import React, {Component} from 'react';

let data = [
  {
    title: 'test title',
    description: 'test description',
    category: 'category'
  },
  {
    title: 'test title 2',
    description: 'test description 2',
    category: 'category 2'
  },
  {
    title: 'test title 3',
    description: 'test description 3',
    category: 'category 3'
  },
];

const RestaurantsList = () => {
  const listItems = data.map((item) => {
    return (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </li>
    );
  });
  return (
      <ul>
        {listItems}
      </ul>
  );
};

export default RestaurantsList;