import React from "react";
import {ConfigProvider} from "antd";
import {InputColors} from "@/shared/assets/tempus-ui/components/inputs/input.tsx";
interface ConfigProviderProps {
    color: InputColors;
    children: React.ReactNode;
}

export const AntdConfigProvider: React.FC<ConfigProviderProps> = ({color, children}) => {
    const iconColor = color === "primary" ? 'var(--PrimaryBackgroundColor)' : 'var(--SecondaryBackgroundColor)';
    const style = {
        borderRadius: 10,
        colorBgContainer:iconColor,
        colorBorder: 'none',
        controlOutlineWidth: 1,
        controlOutline: 'var(--AccentBorderColor)',
        controlItemBgActive: 'var(--TransparentColor)',
        colorBgElevated: iconColor,
        colorText: 'var(--PrimaryTextColor)',
        colorTextPlaceholder: 'var(--SecondaryTextColor)',
        zIndexPopup: 999999999999,
        colorBorderSecondary: 'var(--TransparentColor);',
        colorBorderBg: 'var(--TransparentColor);',
        fontSize: 16,
        fontFamily: "sfPro"
    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: style,
                    DatePicker: style,
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}