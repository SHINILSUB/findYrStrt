import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const onLogout = () => {
        authService.logout();
    };
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <Footer/>
        </section>
    );
};

export default Maker;