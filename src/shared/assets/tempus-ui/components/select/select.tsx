import React from 'react';
import {formItem} from '../..';
import Styles from './select.module.scss';
import { Select as AntdSelect} from 'antd';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import {AntdConfigProvider} from "@/shared/assets/tempus-ui/components/antd-config-provider/antd-config-provider.tsx";
import {InputColors} from "@/shared/assets/tempus-ui/components/inputs/input.tsx";
import {Controller, useFormContext} from "react-hook-form";


interface SelectProps {
    array?: { label: string | null; value: string | null }[];
    placeholder?: string;
    color?: InputColors;
    defaultValue?: string | null;
    name: string
}


const Select: React.FC<SelectProps> = ({
                                           array,
                                           placeholder,
                                           color = "default",
                                           defaultValue,
                                           name
                                       }) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: "This field is required"
            }}
            render={({ field, fieldState }) => (
                <motion.div variants={formItem} className={classNames(Styles.SelectInput, color === "primary" && 'Primary')}>
                    <AntdConfigProvider color={color}>
                        <AntdSelect
                            style={{ border: '1px solid var(--TransparentColor)' }}
                            placeholder={placeholder}
                            className={Styles.SelectInput}
                            onChange={field.onChange}
                            options={array}
                            defaultValue={defaultValue}
                        />
                    </AntdConfigProvider>
                    <br />
                    {fieldState.error && (
                        <span style={{ color: "red" }}>{fieldState.error.message}</span>
                    )}
                </motion.div>
            )}
        />
    );
};

export default Select;


