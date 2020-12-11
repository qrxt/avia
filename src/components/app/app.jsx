import React, { useState, useEffect } from 'react';

import AviaService from '@src/service/avia';
import Header from '@components/header';
import Filter from '@components/filter';
import Sort from '@components/sort';
import Tickets from '@components/tickets';
import styles from './app.module.css';

const App = () => {
  const [tickets, setTickets] = useState({});
  useEffect(() => {
    const fetchTickets = async () => {
      const aviaService = new AviaService();
      const fetchedTickets = await aviaService.getTickets();

      setTickets(fetchedTickets);
    };

    fetchTickets();
  }, []);

  console.log(tickets);

  return (
    <React.StrictMode>
      <div className={styles.app}>
        <div className={styles['page-wrapper']}>
          <div className={styles.page}>
            <Header />

            <div className={styles.search}>
              <Filter />
              <Sort />
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default App;
