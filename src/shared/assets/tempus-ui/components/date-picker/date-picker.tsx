'use client';
import dayjs from "dayjs";
import {DatePicker} from 'antd';
import {motion} from 'framer-motion';
import {Controller, useFormContext} from "react-hook-form";
import {formItem} from '../..';
import {InputColors} from "@/shared/assets/tempus-ui/components/inputs/input.tsx";
import {AntdConfigProvider} from "@/shared/assets/tempus-ui/components/antd-config-provider/antd-config-provider.tsx";

interface RHFDatePickerFieldProps {
    name: string;
    placeholder?: string;
    color?: InputColors
}

const DatePickerField: React.FC<RHFDatePickerFieldProps> = ({name, placeholder, color = "default"}) => {
    const {control} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: "This field is required"
            }}
            render={({field, fieldState}) => {
                return (
                    <motion.div variants={formItem} >
                        <AntdConfigProvider color={color}>
                            <DatePicker
                                placeholder={placeholder}
                                status={fieldState.error ? "error" : undefined}
                                ref={field.ref}
                                name={field.name}
                                onBlur={field.onBlur}
                                value={field.value ? dayjs(field.value) : null}
                                onChange={(date) => {
                                    field.onChange(date ? date.valueOf() : null);
                                }}
                                style={{
                                    height: 45,
                                    fontWeight: 400,
                                    width: '100%',
                                    fontSize: 16,
                                    border: '1px solid var(--TransparentColor)',
                                }}
                            />
                        </AntdConfigProvider>
                        <br/>
                        {fieldState.error ? (
                            <span style={{color: "red"}}>{fieldState.error?.message}</span>
                        ) : null}
                    </motion.div>
                );
            }}
        />
    );
};

export default DatePickerField