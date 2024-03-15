import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.scss';

interface FormInputCreateEvent {
  designation: string;
  specification: string;
}

interface FormInputLoginEvent {
  loginEvent: string;
}

type FormInput = FormInputCreateEvent | FormInputLoginEvent;

interface FormProps {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
  const methods = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
