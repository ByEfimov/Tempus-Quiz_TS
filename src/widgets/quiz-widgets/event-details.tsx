import React from 'react';
import {Box, DatePickerField, Input, Select, TextArea, Title} from "@/shared/assets/tempus-ui";

const EventDetails = ({ organizer }: { organizer: { value: string; label: string; }[] }) => {
    return (
        <Box border>
            <Title title={'создать мероприятие'}/>
            <Input placeholder={'название'} type={"text"} registername={'title'}/>
            <TextArea isResize={false} placeholder={'описание'} registername={'specification'}/>
            <DatePickerField placeholder={'дата'} name={'date'}/>
            <Select
                placeholder={'организатор'}
                array={organizer}
                name={"organizer"}
            />
            <Select
                placeholder={'приватность'}
                array={[
                    {value: 'private', label: 'Приватная'},
                    {value: 'general', label: 'Доступная всем'},
                ]}
                name={"privacy"}
            />
        </Box>
    );
};

export default EventDetails;