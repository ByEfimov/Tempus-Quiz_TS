import React from 'react';
import Styles from './styles.module.scss';
import classNames from 'classnames';
import { MotionProps, motion } from 'framer-motion';

export type FlexAlignment = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';

export type FlexDirection = 'row' | 'column';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexContainerProps {
  className?: string;
  height?: string;
  children: React.ReactNode;
  width?: string;
  flexDirection?: FlexDirection;
  justifyContent?: FlexAlignment;
  alignItems?: FlexAlignment;
  flexWrap?: FlexWrap;
  alignContent?: FlexAlignment;
  gap?: number;
}

const FlexContainer = (props: FlexContainerProps, motionProps: MotionProps) => {
  const { className, children } = props;

  return (
    <motion.div className={classNames(Styles.container, className)} {...motionProps} style={{ ...props }}>
      {children}
    </motion.div>
  );
};

export default FlexContainer;
