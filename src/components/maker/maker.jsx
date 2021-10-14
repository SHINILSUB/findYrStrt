import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'sean',
            type: 'crossfit',
            gym: 'alright',
            location: 'yongin',
            squat1rm: '205lb',
            benchpress: '155lb',
            deadlift: '205lb',
            fileName: 'sean',
            fileUrl: 'sean.png'
        },
        {
            id: '2',
            name: 'sean1',
            type: 'crossfit',
            gym: 'alright',
            location: 'yongin',
            squat1rm: '205lb',
            benchpress: '155lb',
            deadlift: '205lb',
            fileName: 'sean',
            fileUrl: 'sean.png'
        },
        {
            id: '3',
            name: 'sean2',
            type: 'crossfit',
            gym: 'alright',
            location: 'yongin',
            squat1rm: '205lb',
            benchpress: '155lb',
            deadlift: '205lb',
            fileName: 'sean',
            fileUrl: 'null'
        },
    ])
    const history = useHistory()
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user){
                history.pushState('/');
            }
        })
    })
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;