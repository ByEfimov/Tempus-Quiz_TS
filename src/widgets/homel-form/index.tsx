'use client';

import styles from './home-form.module.scss';
import { Input, InputTypes } from '@/shared/assets/tempus-ui';
import Title from '@/shared/assets/tempus-ui/components/title/title';
import Button, { ButtonTypes } from '@/shared/assets/tempus-ui/components/buttons/button';
import Form from '@/shared/assets/tempus-ui/components/form/Form';
import { InputPlaceholder } from '@/pages';

interface HomeFormProps {
  title: string;
  placeholders: InputPlaceholder[];
  onSubmit: () => void;
  needAuth?: boolean;
}

const HomeForm: React.FC<HomeFormProps> = ({ title, placeholders, onSubmit, needAuth = false }) => {
  // const user = useAppSelector();
  const userIsAuth = false; //убрать как появится хук

  function authorizeUser() {
    window.location.href = 'https://tempus-one-ts.vercel.app/Login/quiz';
  }

  return (
    <Form onSubmit={needAuth && !userIsAuth ? authorizeUser : onSubmit}>
      <Title title={title} />
      {placeholders.map(({ placeholder, id, registerName }) => (
        <div className={styles.inputContainer} key={id}>
          <Input Placeholder={placeholder} Type={InputTypes.text} registerName={registerName} />
        </div>
      ))}
      <Button type={ButtonTypes.active}>Продолжить</Button>
    </Form>
  );
};

export default HomeForm;
