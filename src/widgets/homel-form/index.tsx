'use client';

import React from "react";
import styles from './home-form.module.scss';
import { Button, Input, Form, Title } from '@/shared/assets/tempus-ui';
import { InputPlaceholder } from '@/pages';
import { useAppSelector } from '@/features/redux-hooks';
import {FieldValues, SubmitHandler} from "react-hook-form";

interface HomeFormProps {
  title: string;
  placeholders: InputPlaceholder[];
  onSubmit: SubmitHandler<FieldValues>;
  needAuth?: boolean;
}

const HomeForm: React.FC<HomeFormProps> = ({ title, placeholders, onSubmit, needAuth = false }) => {
  const user = useAppSelector((state) => state.User);
  const userIsAuth = !!user.id;

  function authorizeUser() {
    window.location.href = 'https://tempus-one-ts.vercel.app/Login/quiz';
  }

  return (
    <Form onSubmit={needAuth && !userIsAuth ? authorizeUser : onSubmit}>
      <Title title={title} />
      {placeholders.map(({ placeholder, id, registername }) => (
        <div className={styles.inputContainer} key={id}>
          <Input placeholder={placeholder} type="text" registername={registername} />
        </div>
      ))}
      <Button state="active">Продолжить</Button>
    </Form>
  );
};

export default HomeForm;
