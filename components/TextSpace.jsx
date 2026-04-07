import React from 'react';
import styles from '../styles/components/TextSpace.module.css';

function TextSpace() {
  return (
    <div className={styles.textSpace}>
      <div>welcome!<span className={styles.blink}></span></div>
    </div>
  );
}


export default TextSpace;
