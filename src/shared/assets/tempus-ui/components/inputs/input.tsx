import Styles from './styles.module.scss';
import classNames from 'classnames';
import { MotionProps, motion } from 'framer-motion';
import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export type IconPositions = 'left' | 'right';

export type InputColors = 'default' | 'primary';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: IconPositions;
  color?: InputColors;
  registername: string;
}

const Input = (props: InputProps, motionProps: MotionProps) => {
  const { icon, iconPosition, color, registername } = props;
  const { register} = useFormContext();

  return (
    <motion.div {...motionProps} className={classNames(Styles.Input, color === 'primary' && Styles.primary)}>
      {icon && iconPosition === 'left' && <div className={Styles.Input__Icon}>{icon}</div>}
      <input {...props} {...register(registername)} />
    </motion.div>
  );
};

export default Input;