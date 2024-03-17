'use client';

import styles from './home-form.module.scss';
import { Button, Input, Form, Title } from '@/shared/assets/tempus-ui';
import { InputPlaceholder } from '@/pages';
import { useAppSelector } from '@/features/redux-hooks';

interface HomeFormProps {
  title: string;
  placeholders: InputPlaceholder[];
  onSubmit: () => void;
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
      {placeholders.map(({ placeholder, id, registerName }) => (
        <div className={styles.inputContainer} key={id}>
          <Input placeholder={placeholder} type="text" registerName={registerName} />
        </div>
      ))}
      <Button state="active">Продолжить</Button>
    </Form>
  );
};

export default HomeForm;
