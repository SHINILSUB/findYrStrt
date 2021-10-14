import styles from "./card.module.css";
import React from "react";
const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = ({ card }) => {
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
  const url = fileUrl||DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(type)}`}>
      <img className={styles.avatar} src={url} alt="avtr" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>GYM: {gym}</p>
        <p className={styles.location}>location: {location}</p>
        <p className={styles.squat1rm}>Squat1RM: {squat1rm}</p>
        <p className={styles.benchpress}>Bench1RM: {benchpress}</p>
        <p className={styles.deadlift}>Dead1RM: {deadlift}</p>
      </div>
    </li>

    
  );
};
function  getStyles(type) {
    switch (type) {
        case 'crossfit':
            return styles.dark;
        case 'bodybuild':
            return styles.light;
        case 'unknown':
            return styles.colorful;
        default:
            throw new Error (`unknown type: ${type}`);
            
    }
    
}

export default Card;
