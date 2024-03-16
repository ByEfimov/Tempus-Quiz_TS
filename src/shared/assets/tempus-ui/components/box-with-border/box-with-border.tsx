'use client';
import React from 'react';
import styles from './styles.module.scss';
interface BoxWithBorderProps {
  children: React.ReactNode
}
const BoxWithBorder: React.FC<BoxWithBorderProps> = ({children}) => {
  return (
    <div className={styles.box}>
      {children}
    </div>
  );
};

export default BoxWithBorder;