import React from 'react';
import PropTypes from 'prop-types';

import styles from './checkbox.module.css';

const Checkbox = (props) => {
  const { labelText, checked, name } = props;

  return (
    <label className={styles.label} htmlFor={name}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        name={name}
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
};

export default Checkbox;
