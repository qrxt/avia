import React from 'react';
import cn from 'classnames';

import styles from './sort.module.css';

const Sort = () => (
  <div className={styles.sort}>
    <form>
      <button
        className={cn(styles.btn, styles['btn-active'])}
        type="button"
      >
        Самый дешевый
      </button>

      <button
        className={cn(styles.btn)}
        type="button"
      >
        Самый быстрый
      </button>
    </form>
  </div>
);

export default Sort;
