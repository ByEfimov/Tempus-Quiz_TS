'use client';

import { InputColors } from './input';
import Styles from './input.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

interface TextArea {
  Placeholder: string;
  DefaultValue?: string;
  MaxLength?: number;
  Color?: InputColors;
  RegisterName: string;
}

const TextArea = ({ Placeholder, DefaultValue, MaxLength, Color = InputColors.default, RegisterName }: TextArea) => {
  const { register } = useFormContext();
  return (
    <motion.div className={classNames(Styles.Input, Color === InputColors.primary && Styles.primary)}>
      <textarea
        maxLength={MaxLength}
        defaultValue={DefaultValue}
        placeholder={Placeholder}
        {...register(RegisterName)}
      ></textarea>
    </motion.div>
  );
};

export default TextArea;
