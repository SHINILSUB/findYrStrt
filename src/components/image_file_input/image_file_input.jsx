import React from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = (event)=>{
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async event => {
        console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })

    }
    return <div className={styles.continer}>
        <input ref={inputRef} className={styles.input} onChange={onChange} type="file" accept="image/*" name="file"/>
        <button className={styles.button} onClick={onButtonClick}>{name || 'no file'}</button>
    </div>
}

export default ImageFileInput;
