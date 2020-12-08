import React from 'react';

import Panel from '@components/panel';
import Checkbox from '@components/checkbox';
import styles from './filter.module.css';

const Filter = () => (
  <Panel className={styles.filter}>
    <h2 className={styles.title}>
      Количество пересадок
    </h2>

    <form>
      <ul className={styles.checkboxes}>
        <li className={styles.checkbox}>
          <Checkbox
            labelText="Все"
            name="transfers-all"
            id="transfers-all"
          />
        </li>

        <li className={styles.checkbox}>
          <Checkbox
            labelText="Без пересадок"
            name="transfers-without"
            id="transfers-without"
            checked
          />
        </li>

        <li className={styles.checkbox}>
          <Checkbox
            labelText="1 пересадка"
            name="transfers-one"
            id="transfers-one"
            checked
          />
        </li>

        <li className={styles.checkbox}>
          <Checkbox
            labelText="2 пересадки"
            name="transfers-two"
            id="transfers-two"
            checked
          />
        </li>

        <li className={styles.checkbox}>
          <Checkbox
            labelText="3 пересадки"
            name="transfers-three"
            id="transfers-three"
          />
        </li>
      </ul>
    </form>
  </Panel>
);

export default Filter;
