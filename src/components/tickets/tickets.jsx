import React from 'react';

import Ticket from '@components/ticket';
import styles from './tickets.module.css';

const Tickets = () => (
  <section className={styles.tickets}>
    <ul className={styles.['tickets-list']}>
      <li>
        <Ticket />
      </li>
    </ul>
  </section>
);

export default Tickets;
