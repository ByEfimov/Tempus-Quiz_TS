'use client';

import HomeForm from '@/widgets/homel-form';
import { FlexContainer } from '@/shared/assets/tempus-ui';
import { FieldValues } from 'react-hook-form';

export type RegisterName = 'designation' | 'specification' | 'enterQuiz';
export interface InputPlaceholder {
  placeholder: string;
  registername: RegisterName;
  id: number;
}

const createQuizInputConfig: InputPlaceholder[] = [
  {
    placeholder: 'Название',
    registername: 'designation',
    id: 1,
  },
];

const loginUserInputConfig: InputPlaceholder[] = [
  {
    placeholder: 'Код мероприятия',
    registername: 'enterQuiz',
    id: 1,
  },
];

export default function Home() {
  function createQuiz(data: FieldValues) {
    console.log('create', data);
  }

  function enterQuiz(data: FieldValues) {
    console.log('enter', data);
  }

  return (
    <FlexContainer justifyContent="space-around" alignItems="stretch" height="230px">
      <HomeForm onSubmit={createQuiz} placeholders={createQuizInputConfig} title="Cоздать мероприятие" needAuth />
      <HomeForm onSubmit={enterQuiz} placeholders={loginUserInputConfig} title="Войти на мероприятие" needAuth />
    </FlexContainer>
  );
}
