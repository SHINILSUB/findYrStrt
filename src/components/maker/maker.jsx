import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
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
            theme: 'light',
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
            theme: 'light',
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
            theme: 'light',
            fileName: 'sean',
            fileUrl: 'sean.png'
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
            <div className={styles.container}></div>
            <Footer/>
        </section>
    );
};

export default Maker;