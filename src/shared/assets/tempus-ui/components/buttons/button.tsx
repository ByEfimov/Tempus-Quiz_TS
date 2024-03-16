import React from 'react';
import Styles from './button.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { formItemType } from '@/shared/assets/tempus-ui/animation/form-animate';

export enum ButtonTypes {
  active = 'active',
  default = 'default',
  error = 'error',
  icon = 'icon',
}

interface Button {
  title?: string;
  click?: () => void;
  type: ButtonTypes;
  variants?: formItemType;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ title, click, type, variants, className, children }: Button) => {
  const moreStyleOfButton =
    type === ButtonTypes.active
      ? Styles.ButtonActive
      : type === ButtonTypes.error
      ? Styles.ButtonError
      : type === ButtonTypes.icon
      ? Styles.ButtonIcon
      : undefined;

  return (
    <motion.button
      className={classNames(Styles.Button, moreStyleOfButton, className)}
      onClick={() => click && click()}
      type="submit"
      variants={variants}
    >
      {children && children}
      {type !== ButtonTypes.icon && title}
    </motion.button>
  );
};
export default Button;
