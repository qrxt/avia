import React from 'react';

import styles from './transfer.module.css';

const Transfer = () => (
  <dl className={styles.transfer}>
    <div className={styles.wrapper}>
      <dt className={styles.key}>
        2
      </dt>

      <dd className={styles.value}>
        1
      </dd>
    </div>
  </dl>
);

export default Transfer;
