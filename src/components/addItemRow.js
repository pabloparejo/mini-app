import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

const AddItemRow = props => {
  const { onChange, onClick } = props;
  return (
    <div>
      <Input onChange={onChange} style={{ width: 400 }} />
      <Button type="primary" onClick={onClick}>Check</Button>
    </div>
  );
};

AddItemRow.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

AddItemRow.defaultProps = {
  onChange: undefined,
  onClick: undefined,
};

export default AddItemRow;
