import React from 'react';
import styles from "./styles.module.scss"
import classNames from "classnames";
interface BoxProps {
    children: React.ReactNode;
    border?: boolean;
}

const Box: React.FC<BoxProps> = ({ children, border = false }) => {
    return <div className={classNames(styles.Box, border && styles.Border)}>{children}</div>;
};

export default Box;
