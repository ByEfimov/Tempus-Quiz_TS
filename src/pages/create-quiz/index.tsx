"use client"
import {Form, Input, Title} from "@/shared/assets/tempus-ui";
import {FieldValues, SubmitHandler} from "react-hook-form";

interface FormData {
  title: string;
}
export default function CreateQuiz() {
  const onSubmit: SubmitHandler<FieldValues> = (data:FormData) => console.log(data);

  return <>
    <Form onSubmit={onSubmit}>
      <Title title={'создать мероприятие'} />
      <Input placeholder={'название'} type={"text"} registername={'title'} />
    </Form>


  </>;
}
