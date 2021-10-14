import React from 'react';
import Button from '../button/button';
import styles from "./card_edit_form.module.css";
import ImageFileInput from '../image_file_input/image_file_input';

const onsubmit = () => {};
const CardEditForm = ({card}) => {
    const {
        name,
        type,
        gym,
        location,
        squat1rm,
        benchpress,
        deadlift,
        fileName,
        fileUrl,
      } = card;
      return (
          <form className={styles.form}>
              <input className={styles.input} type="text" name="name" value={name}/>
              <input className={styles.input} type="text" name="type" value={type}/>
              <select className={styles.select} name="type" value={type}>
                  <option value="crossfit">crossfit</option>
                  <option value="bodybuild">bodybuild</option>
                  <option value="unknown">unknown</option>
              </select>
              <input className={styles.input} type="text" name="gym" value={gym}/>
              <input className={styles.input} type="text" name="location" value={location}/> 
              <input className={styles.input} type="text" name="gym" value={squat1rm}/>
              <input className={styles.input} type="text" name="benchpress" value={benchpress}/>
              <input className={styles.input} type="text" name="deadlift" value={deadlift}/>
              <div className={styles.fileInput}>
              <ImageFileInput/>
              <Button name='Delete' onClick={onsubmit}/>
              </div>
              
              

          </form>
      )
};

export default CardEditForm;