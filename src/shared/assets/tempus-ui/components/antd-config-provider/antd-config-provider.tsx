import React from "react";
import {ConfigProvider} from "antd";
import {InputColors} from "@/shared/assets/tempus-ui/components/inputs/input.tsx";

interface ConfigProviderProps {
    color: InputColors;
    children: React.ReactNode;
}

export const AntdConfigProvider: React.FC<ConfigProviderProps> = ({color, children}) => {

    const style = {
        borderRadius: 10,
        colorBgContainer:
            color === "primary" ? 'var(--PrimaryBackgroundColor)' : 'var(--SecondaryBackgroundColor)',
        colorBorder: 'none',
        controlOutlineWidth: 1,
        controlOutline: 'var(--AccentBorderColor)',
        controlItemBgActive: 'var(--TransparentColor)',
        colorBgElevated:
            color === "primary" ? 'var(--PrimaryBackgroundColor)' : 'var(--SecondaryBackgroundColor)',
        colorText: 'var(--PrimaryTextColor)',
        colorTextPlaceholder: 'var(--SecondaryTextColor)',
        zIndexPopup: 999999999999,
        colorBorderSecondary: 'var(--TransparentColor);',
        colorBorderBg: 'var(--TransparentColor);',
    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: style,
                    DatePicker: style
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}