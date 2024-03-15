'use client';
import styles from './home-form.module.scss';
import { Input, InputTypes } from '@/shared/assets/tempus-ui';
import Title from '@/shared/assets/tempus-ui/components/title/title';
import Button, { ButtonTypes } from '@/shared/assets/tempus-ui/components/buttons/button';
import { InputPlaceholder } from '@/app/page';
import Form from '@/shared/assets/tempus-ui/components/form/Form';

interface HomeFormProps {
  title: string;
  placeholders: InputPlaceholder[];
}

const HomeForm: React.FC<HomeFormProps> = ({ title, placeholders }) => {
  return (
    <Form>
      <div>
        <Title title={title} />
        {placeholders.map(({ placeholder, id, registerName }) => (
          <div className={styles.inputContainer} key={id}>
            <Input Placeholder={placeholder} Type={InputTypes.text} registerName={registerName} />
          </div>
        ))}
      </div>
      <Button Type={ButtonTypes.active} Click={() => {}}>
        Продолжить
      </Button>
    </Form>
  );
};

export default HomeForm;
