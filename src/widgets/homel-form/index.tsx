'use client';

import styles from './home-form.module.scss';
import { BoxWithBorder, Input, InputTypes } from '@/shared/assets/tempus-ui';
import Title from '@/shared/assets/tempus-ui/components/title/title';
import Button, { ButtonTypes } from '@/shared/assets/tempus-ui/components/buttons/button';
import Form from '@/shared/assets/tempus-ui/components/form/Form';
import { InputPlaceholder } from '@/pages';
import { useAppSelector } from '@/features/redux-hooks';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface HomeFormProps<T extends FieldValues> {
  title: string;
  placeholders: InputPlaceholder[];
  onSubmit: SubmitHandler<T>;
  needAuth?: boolean;
}

const HomeForm = <T extends FieldValues> ({ title, placeholders, onSubmit, needAuth = false }:HomeFormProps<T>) => {
  const user = useAppSelector((state) => state.User);
  const userIsAuth = !!user.id;

  function authorizeUser() {
    window.location.href = 'https://tempus-one-ts.vercel.app/Login/quiz';
  }

  return (
    <BoxWithBorder>
      <Form onSubmit={needAuth && !userIsAuth ? authorizeUser : onSubmit}>
        <Title title={title} />
        {placeholders.map(({ placeholder, id, registerName }) => (
          <div className={styles.inputContainer} key={id}>
            <Input Placeholder={placeholder} Type={InputTypes.text} registerName={registerName} />
          </div>
        ))}
        <Button type={ButtonTypes.active}>Продолжить</Button>
      </Form>
    </BoxWithBorder>
  );
};

export default HomeForm;
