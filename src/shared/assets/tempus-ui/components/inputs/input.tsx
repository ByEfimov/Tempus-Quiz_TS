'use client';
import Styles from './input.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { formItemType } from '@/shared/assets/tempus-ui/animation/form-animate';
import { useFormContext } from 'react-hook-form';

export enum InputTypes {
  text = 'text',
  number = 'number',
  password = 'password',
  email = 'email',
  phone = 'phone',
}

export enum IconPositions {
  left = 'left',
  right = 'right',
}

export enum InputColors {
  default = 'default',
  primary = 'primary',
}

interface InputProps {
  Placeholder: string;
  DefaultValue?: string;
  Icon?: ReactNode;
  MaxLength?: number;
  Type: InputTypes;
  Variants?: formItemType;
  IconPosition?: IconPositions;
  Color?: InputColors;
  registerName: string;
}

const Input = ({
  Placeholder,
  DefaultValue,
  Icon,
  MaxLength,
  Type,
  Variants,
  IconPosition,
  Color = InputColors.default,
  registerName,
}: InputProps) => {
  const { register } = useFormContext();
  return (
    <motion.div
      variants={Variants}
      className={classNames(Styles.Input, Color === InputColors.primary && Styles.primary)}
    >
      {Icon && IconPosition === IconPositions.left && <div className={Styles.Input__Icon}>{Icon}</div>}
      <input
        maxLength={MaxLength}
        type={Type}
        defaultValue={DefaultValue}
        placeholder={Placeholder}
        {...register(registerName)}
      />
    </motion.div>
  );
};

export default Input;
