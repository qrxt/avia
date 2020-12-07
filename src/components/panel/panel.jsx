import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './panel.module.css';

const Panel = (props) => {
  const { children, className } = props;

  return (
    <div className={cn(styles.panel, className)}>
      { children }
    </div>
  );
};

Panel.defaultProps = {
  className: '',
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Panel;
