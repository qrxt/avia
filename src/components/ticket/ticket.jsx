import React from 'react';

import Panel from '@components/panel';
import Transfer from '@components/transfer';
import { ReactComponent as Logo } from '@public/images/s7.svg';
import styles from './ticket.module.css';

const Ticket = () => (
  <Panel className={styles.ticket}>
    <p className={styles.price}>
      13 400 Р
    </p>

    <Logo
      className={styles.logo}
      width="110"
      height="36"
    />

    <ul className={styles.departures}>
      <li className={styles.departure}>
        <Transfer />
      </li>
    </ul>
  </Panel>
);

export default Ticket;
