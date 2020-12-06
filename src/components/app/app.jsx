import React from 'react';
import cn from 'classnames';

import Header from '@components/header';

import styles from './app.module.css';

function App() {
  return (
    <React.StrictMode>
      <div className={cn(styles.app)}>
        <div className={cn(styles['page-wrapper'])}>
          <Header />
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
