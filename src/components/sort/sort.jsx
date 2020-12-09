import React from 'react';

import Switch from '@components/switch';
import styles from './sort.module.css';

const Sort = () => (
  <div className={styles.sort}>
    <form>
      <Switch className={styles.switch} active>
        Самый дешевый
      </Switch>

      <Switch className={styles.switch}>
        Самый быстрый
      </Switch>
    </form>
  </div>
);

export default Sort;
