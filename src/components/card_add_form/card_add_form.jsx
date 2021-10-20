import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = ({FileInput, onAdd, onFileChange}) => {
    const formRef = useRef();
  const nameRef = useRef();
  const typeRef = useRef();
  const gymRef = useRef();
  const locationRef = useRef();
  const squat1rmRef = useRef();
  const benchpressRef = useRef();
  const deadliftRef = useRef();

  const [file, setFile] =useState({fileName: null, fileURL: null});

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      type: typeRef.current.value,
      gym: gymRef.current.value || "",
      location: locationRef.current.value || "",
      squat1rm: squat1rmRef.current.value || "",
      benchpress: benchpressRef.current.value || "",
      deadlift: deadliftRef.current.value || "",
      fileName: file.fileName ||'',
      fileURL: file.fileURL || ''
    };
    formRef.current.reset();
    setFile({fileName: null, fileURL: null})
    onAdd(card)
  };

  return (
    <form
    ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <select
        ref={typeRef}
        className={styles.select}
        name="type"
        placeholder="type"
      >
        <option placeholder="crossfit">crossfit</option>
        <option placeholder="bodybuild">bodybuild</option>
        <option placeholder="unknown">unknown</option>
      </select>
      <input
        ref={gymRef}
        className={styles.input}
        type="text"
        name="gym"
        placeholder="gym"
      />
      <input
        ref={locationRef}
        className={styles.input}
        type="text"
        name="location"
        placeholder="location"
      />
      <input
        ref={squat1rmRef}
        className={styles.input}
        type="text"
        name="gym"
        placeholder="squat1rm"
      />
      <input
        ref={benchpressRef}
        className={styles.input}
        type="text"
        name="benchpress"
        placeholder="benchpress"
      />
      <input
        ref={deadliftRef}
        className={styles.input}
        type="text"
        name="deadlift"
        placeholder="deadlift"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange}/>
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
