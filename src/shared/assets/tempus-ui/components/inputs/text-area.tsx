import { TextareaHTMLAttributes } from 'react';
import { InputColors } from './input';
import Styles from './styles.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  color?: InputColors;
  registername: string;
}

const TextArea: React.FC<TextAreaProps>  = ({ color, registername,...props }) => {
  const { register } = useFormContext();

  return (
    <motion.div className={classNames(Styles.Input, color === 'primary' && Styles.primary)}>
      <textarea {...props} {...register(registername)}></textarea>
    </motion.div>
  );
};

export default TextArea;
