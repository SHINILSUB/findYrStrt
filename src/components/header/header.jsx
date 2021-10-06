import React from "react";
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <img className={styles.logo}src="/images/logo.png" alt="logo" />
    </header>
)

export default Header;
