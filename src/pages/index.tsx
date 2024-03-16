'use client';

import styles from './page.module.scss';
import HomeForm from '@/widgets/homel-form';
import FlexContainer, {
  FlexAlignItems,
  FlexJustifyContent,
} from '@/shared/assets/tempus-ui/components/flex-container/flex-container';

export type RegisterName = 'designation' | 'specification' | 'enterQuiz';
export interface InputPlaceholder {
  placeholder: string;
  registerName: RegisterName;
  id: number;
}

const createQuizInputConfig: InputPlaceholder[] = [
  {
    placeholder: 'название',
    registerName: 'designation',
    id: 1,
  },
  {
    placeholder: 'описание',
    registerName: 'specification',
    id: 2,
  },
];

const loginUserInputConfig: InputPlaceholder[] = [
  {
    placeholder: 'код мероприятия',
    registerName: 'enterQuiz',
    id: 1,
  },
];

export default function Home() {
  function createQuiz() {
    console.log('create');
  }
  function enterQuiz() {
    console.log('enter');
  }

  return (
    <FlexContainer
      justifyContent={FlexJustifyContent.CENTER}
      alignItems={FlexAlignItems.CENTER}
      className={styles.container}
    >
      <FlexContainer justifyContent={FlexJustifyContent.SPACE_AROUND} className={styles.homeFormContainer}>
        <HomeForm onSubmit={createQuiz} placeholders={createQuizInputConfig} title="Cоздать мероприятие" needAuth />
        <HomeForm onSubmit={enterQuiz} placeholders={loginUserInputConfig} title="Войти на мероприятие" needAuth />
      </FlexContainer>
    </FlexContainer>
  );
}
