import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChange, categories }) => (
  <select onChange={handleChange}>
    <option value="all">All</option>
    {categories.map((category) => {
      <option key={category}>
        {' '}
        {category}
        {' '}
      </option>;
    })}
  </select>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

CategoryFilter.defaultProps = {
  handleChange: null,
  categories: [],
};

export default CategoryFilter;
