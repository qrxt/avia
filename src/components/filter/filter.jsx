import React from 'react';

import Panel from '@components/panel';
import styles from './filter.module.css';

const Filter = () => (
  <Panel className={styles.filter}>
    <h2 className={styles.title}>
      Количество пересадок
    </h2>

    <ul className={styles.checkboxes}>
      <li className={styles.checkbox}>
        Без пересадок
      </li>

      <li className={styles.checkbox}>
        1 пересадка
      </li>

      <li className={styles.checkbox}>
        2 пересадки
      </li>

      <li className={styles.checkbox}>
        3 пересадки
      </li>
    </ul>
  </Panel>
);

export default Filter;
