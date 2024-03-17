import React from 'react';
import Styles from './styles.module.scss';
import classNames from 'classnames';
import { MotionProps, motion } from 'framer-motion';

export type ButtonStates = 'active' | 'default' | 'error' | 'icon';

interface ButtonProps extends MotionProps {
  title?: string;
  state: ButtonStates;
  className?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps, motionProps: MotionProps) => {
  const { state, className, children, title } = props;

  const moreStyleOfButton = {
    active: Styles.ButtonActive,
    error: Styles.ButtonError,
    icon: Styles.ButtonIcon,
    default: undefined,
  };

  return (
    <motion.button
      className={classNames(Styles.Button, moreStyleOfButton[state], className)}
      {...props}
      {...motionProps}
    >
      {children && children}
      {state !== 'icon' && title}
    </motion.button>
  );
};
export default Button;
