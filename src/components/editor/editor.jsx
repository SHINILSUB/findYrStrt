import styles from "./editor.module.css";
import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({cards}) => (
<section className={styles.editor}>
<h1 className={styles.title}>Record Writer</h1>
{cards.map(card => (<CardEditForm card={card}/>))}

</section>
            
    );

export default Editor;