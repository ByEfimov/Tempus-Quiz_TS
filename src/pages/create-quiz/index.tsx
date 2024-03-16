'use client';

import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import dayjs from 'dayjs';
import {
  BoxWithBorder,
  Input,
  Title,
  InputTypes,
  TextArea,
  Select,
  SelectTypes, Datepicker,
} from '@/shared/assets/tempus-ui';
import Form from '@/shared/assets/tempus-ui/components/form/Form.tsx';


interface FormData {
  title: string;
}

export default function CreateQuiz() {
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  const onChange = (date : string | string[]) => {
    console.log(date);
  };
  return <>

    <Form onSubmit={onSubmit}>
      <BoxWithBorder>
        <Title title={'создать мероприятие'} />
        <Input Placeholder={'название'} Type={InputTypes.text} registerName={'title'} />
        <TextArea Placeholder={'описание'} RegisterName={'specification'} />
        <Datepicker Placeholder={'дата старта'} Callback={onChange} Default={dayjs(Date.now(), 'YYYY-MM-DD')}/>
        <Select
          Type={SelectTypes.Input} Placeholder={'организатор'}
          Array={[{ label: 'организатор', value: 'организатор' }]}
          setSelect={(value: string) => console.log(value)}
        />

        <Select
          Type={SelectTypes.Input} Placeholder={'приватность'}
          Array={[{ label: 'приватность', value: 'приватность' }]}
          setSelect={(value: string) => console.log(value)}
        />
      </BoxWithBorder>
    </Form>
  </>;
}
