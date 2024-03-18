'use client';

import React from 'react';
import { Button, Input, Form, Title } from '@/shared/assets/tempus-ui';
import { InputPlaceholder } from '@/pages';
import { useAppSelector } from '@/features/redux-hooks';
import { FieldValues, SubmitHandler } from 'react-hook-form';

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
    <Form onSubmit={needAuth && !userIsAuth ? authorizeUser : onSubmit} style={{ width: '350px' }}>
      <Title title={title} />
      {placeholders.map(({ placeholder, id, registername }) => (
        <Input placeholder={placeholder} key={id} type="text" registername={registername} />
      ))}
      <Button state="active">Продолжить</Button>
    </Form>
  );
};

export default HomeForm;
