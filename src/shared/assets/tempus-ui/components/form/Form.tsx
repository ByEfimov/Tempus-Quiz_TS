import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './form.module.scss';

interface FormProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
