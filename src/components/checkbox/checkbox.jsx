import React from 'react';
import PropTypes from 'prop-types';

import styles from './checkbox.module.css';

const Checkbox = (props) => {
  const {
    labelText,
    checked,
    name,
    id,
  } = props;

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        className={styles.checkbox}
        type="checkbox"
        defaultChecked={checked}
        name={name}
        id={id}
      />

      <span className={styles.['label-text']}>
        { labelText }
      </span>
    </label>
  );
};

Checkbox.defaultProps = {
  labelText: 'Checkbox Label Text',
  checked: false,
};

Checkbox.propTypes = {
  labelText: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
