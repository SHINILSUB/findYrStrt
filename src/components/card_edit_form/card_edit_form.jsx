import React from 'react';
import Button from '../button/button';
import styles from "./card_edit_form.module.css";



const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const {
        name,
        type,
        gym,
        location,
        squat1rm,
        benchpress,
        deadlift,
        fileName
      } = card;
      const onFileChange = file => {
          updateCard({
              ...card,
              fileName: file.name,
              fileURL: file.url,
          })

      }
      const onChange = (event) => {
          if(event.currentTarget == null){
              return;
          }event.preventDefault();
          updateCard({
              ...card, 
              [event.currentTarget.name]: event.currentTarget.value 
          })
      }
      const onSubmit = event => {
        deleteCard(card);
    };
      return (
          <form className={styles.form}>
              <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
              <select className={styles.select} name="type" value={type} onChange={onChange}>
                  <option value="crossfit">crossfit</option>
                  <option value="bodybuild">bodybuild</option>
                  <option value="unknown">unknown</option>
              </select>
              <input className={styles.input} type="text" name="gym" value={gym} onChange={onChange}/>
              <input className={styles.input} type="text" name="location" value={location} onChange={onChange}/> 
              <input className={styles.input} type="text" name="gym" value={squat1rm} onChange={onChange}/>
              <input className={styles.input} type="text" name="benchpress" value={benchpress} onChange={onChange}/>
              <input className={styles.input} type="text" name="deadlift" value={deadlift} onChange={onChange}/>
              <div className={styles.fileInput}>
              <FileInput name={fileName} onFileChange={onFileChange}/>
              </div>
              <Button name="Delete" onClick={onSubmit}/>
              
              
              

          </form>
      )
};

export default CardEditForm;