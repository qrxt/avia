import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './switch.module.css';

const Switch = (props) => {
  const { className, active, children } = props;

  console.log(active, typeof active);

  return (
    <button
      className={cn(
        styles.switch,
        className,
        { [styles.active]: active },
      )}
      type="button"
      active={active}
    >
      { children }
    </button>
  );
};

Switch.defaultProps = {
  active: false,
  children: '',
  className: '',
};

Switch.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Switch;
