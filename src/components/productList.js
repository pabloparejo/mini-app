import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const ProductList = props => {
  const { onChange, products } = props;
  return (
    <ul>
      {products.map(product => (
        <li key={product.name}>
          <Checkbox
            checked={product.checked}
            onChange={() => onChange(product.name)}
          />
          {' '}
          {product.name}
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func,
};

ProductList.defaultProps = {
  onChange: undefined,
};

export default ProductList;
