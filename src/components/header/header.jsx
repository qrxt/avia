import React from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '@public/images/logo.svg';
import styles from './header.module.css';

const Header = () => (
  <header className="page-header">
    <Logo className={cn(styles.logo)} width="64" height="64" />
  </header>
);

export default Header;
