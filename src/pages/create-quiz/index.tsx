"use client"
import {
    Box,
    Button,
    DatePickerField,
    FlexContainer,
    Input,
    Select,
    TextArea,
    TextAreaProvider,
    Title
} from "@/shared/assets/tempus-ui";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {checkAllValuesFilled, ValuesFilled} from "@/features/check-value-filled/check-value-filled.ts";
import styles from "./styles.module.scss"
interface FormValue extends Record<string, ValuesFilled> {
    title: string;
    specification: string;
    date: Date;
}

export default function CreateQuiz() {
    const [active, setActive] = useState(false)
    const methods = useForm<FormValue>();


    useEffect(() => {
        const data = methods.watch();
        const isFormFilled = checkAllValuesFilled<FormValue>(data);
        setActive(isFormFilled);
    }, [methods.getValues()]);


    function onSubmit(data: FormValue) {
        if (checkAllValuesFilled<FormValue>(data)) {
            console.log('Все поля объекта заполнены', data);
        }
    }

    return (
        <FormProvider {...methods}>
            <form  onSubmit={methods.handleSubmit(onSubmit)} className={styles.container}>
                <FlexContainer justifyContent="space-between" >
                   <div>
                       <Box border >
                           <Title title={'создать мероприятие'}/>
                           <Input placeholder={'название'} type={"text"} registername={'title'}/>
                           <TextArea isResize={false} placeholder={'описание'} registername={'specification'}/>
                           <DatePickerField placeholder={'дата'} name={'date'}/>
                           <Select
                               placeholder={'организатор'}
                               array={[{label: 'организатор', value: 'организатор'}]}
                               name={"organizer"}
                           />
                           <Select
                               placeholder={'приватность'}
                               array={[{label: 'приватность', value: 'приватность'}]}
                               name={"privacy"}
                           />
                       </Box>
                   </div>

                    <Box border>
                        <Title title={'задачи'}/>
                        <Input placeholder={'название'} type={"text"} registername={'task-title'}/>
                        <TextAreaProvider>
                            <TextArea isResize={false} placeholder={'описание'} registername={'task-specification'}/>
                            <TextArea isResize placeholder={'исходная функция'} registername={'original-function'}/>
                            <TextArea isResize placeholder={'вход функции'} registername={'input-function'}/>
                            <TextArea isResize placeholder={'результат'} registername={'result'}/>
                        </TextAreaProvider>
                        <DatePickerField placeholder={'ограничение по времени'} name={'time-limit'}/>
                    </Box>
                </FlexContainer>
                <FlexContainer  justifyContent="flex-end" >
                    <Button style={{width: "300px" , marginTop: 90}} state={active ? "active" : "default"}>начать</Button>
                </FlexContainer>
            </form>
        </FormProvider>
    );
}