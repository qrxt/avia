import React from 'react';
import PropTypes from 'prop';
import cn from 'classnames';

import styles from './panel.module.css';

const Panel = (props) => {
  const {
    children,
  } = props;

  return <div className={cn(styles.panel)}>{ children }</div>;
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Panel;
