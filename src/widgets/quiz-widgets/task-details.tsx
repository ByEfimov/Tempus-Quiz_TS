import React from 'react';
import {Box, Input, TextArea, TextAreaProvider, TimePickerField, Title} from "@/shared/assets/tempus-ui";

const TaskDetails = () => {
    return (
        <Box border>
            <Title title={'задачи'}/>
            <Input placeholder={'название'} type={"text"} registername={'task-title'}/>
            <TextAreaProvider>
                <TextArea isResize={false} placeholder={'описание'} registername={'task-specification'}/>
                <TextArea isResize placeholder={'исходная функция'} registername={'original-function'}/>
                <TextArea isResize placeholder={'вход функции'} registername={'input-function'}/>
                <TextArea isResize placeholder={'результат'} registername={'result'}/>
            </TextAreaProvider>
            <TimePickerField placeholder={'ограничение по времени'} name={'time-limit'}/>
        </Box>
    );
};

export default TaskDetails;