import {InputColors} from "@/shared/assets/tempus-ui/components/inputs/input.tsx";
import {Controller, useFormContext} from "react-hook-form";
import {motion} from "framer-motion";
import {formItem} from "@/shared/assets/tempus-ui";
import {AntdConfigProvider} from "@/shared/assets/tempus-ui/components/antd-config-provider/antd-config-provider.tsx";
import { TimePicker} from "antd";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ru_RU";

interface TimePickerFieldProps {
    name: string;
    placeholder?: string;
    color?: InputColors
}
const format = 'HH:mm';
const TimePickerField: React.FC<TimePickerFieldProps> = ({name, placeholder, color = "default"}) => {
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
                            <TimePicker
                                placeholder={placeholder}
                                status={fieldState.error ? "error" : undefined}
                                ref={field.ref}
                                name={field.name}
                                onBlur={field.onBlur}
                                value={field.value ? dayjs(field.value) : null}
                                onChange={(date) => {
                                    field.onChange(date ? date.valueOf() : null);
                                }}
                                locale={locale}
                                format={format}
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

export default TimePickerField