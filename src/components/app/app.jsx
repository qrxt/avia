import React from 'react';
import cn from 'classnames';

import Header from '@components/header';
import Filter from '@components/filter';
import styles from './app.module.css';

const App = () => (
  <React.StrictMode>
    <div className={cn(styles.app)}>
      <div className={styles['page-wrapper']}>
        <div className={styles.page}>
          <Header />

          <div className={styles.search}>
            <Filter />
            {/* Sort */}
            {/* Tickets */}
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

export default App;
