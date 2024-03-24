"use client"
import {
    Button,
    FlexContainer,
} from "@/shared/assets/tempus-ui";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {checkAllValuesFilled, ValuesFilled} from "@/features/check-value-filled/check-value-filled.ts";
import styles from "./styles.module.scss"
import getUserAdmins from "@/features/api/get-user-admins.ts";
import {useAppSelector} from "@/features/redux-hooks.ts";
import {setHeaderTitle} from "@/app/slices/header/slice";
import {HEADER_TITLES} from "@/app/slices/header/types.ts";
import {useDispatch} from "react-redux";
import TaskDetails from "@/widgets/quiz-widgets/task-details.tsx";
import EventDetails from "@/widgets/quiz-widgets/event-details.tsx";

interface FormValue extends Record<string, ValuesFilled> {
    title: string;
    specification: string;
    date: Date;
}

export default function CreateQuiz() {
    const [active, setActive] = useState(false)
    const methods = useForm<FormValue>();
    const user = useAppSelector((state) => state.User);
    const [organizer, setOrganizer] = useState<{ value: string; label: string; }[]>([])
    const dispatch = useDispatch();

    useEffect(() => {
        const data = methods.watch();
        const isFormFilled = checkAllValuesFilled<FormValue>(data);
        setActive(isFormFilled);
    }, [methods.getValues()]);

    useEffect(() => {
        const userAdmins = getUserAdmins(user.id)
        userAdmins.then(data => {
            setOrganizer(data)
        })
        dispatch(setHeaderTitle({title: HEADER_TITLES.CREATE_QUIZ}))
    }, []);

    function onSubmit(data: FormValue) {
        if (checkAllValuesFilled<FormValue>(data)) {
            console.log('Все поля объекта заполнены', data);
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.container}>
                <FlexContainer justifyContent="space-between">
                    <EventDetails organizer={organizer}/>
                    <TaskDetails/>
                </FlexContainer>
                <FlexContainer justifyContent="flex-end">
                    <Button style={{width: "300px", marginTop: 90, marginBottom: 30}}
                            state={active ? "active" : "default"}>начать</Button>
                </FlexContainer>
            </form>
        </FormProvider>
    );
}