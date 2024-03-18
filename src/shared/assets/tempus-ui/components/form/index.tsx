import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Styles from './styles.module.scss';
import { MotionProps, motion } from 'framer-motion';

interface FormProps extends MotionProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

const Form = (props: FormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <motion.form {...props} className={Styles.form} onSubmit={methods.handleSubmit(props.onSubmit)}>
        {props.children}
      </motion.form>
    </FormProvider>
  );
};

export default Form;
