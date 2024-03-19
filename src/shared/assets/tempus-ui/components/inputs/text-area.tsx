import React, {createContext, TextareaHTMLAttributes, useContext, useState} from 'react';
import {InputColors} from './input';
import Styles from './styles.module.scss';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import {useFormContext} from 'react-hook-form';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    color?: InputColors;
    registername: string;
    isResize?: boolean
}
interface TextAreaContextType {
    expandedTextArea: string | null;
    setExpandedTextArea: React.Dispatch<React.SetStateAction<string | null>>;
}

const TextAreaContext = createContext<TextAreaContextType>({
    expandedTextArea: null,
    setExpandedTextArea: () => null,
});

interface TextAreaProviderProps {
    children: React.ReactNode
}
export const TextAreaProvider: React.FC<TextAreaProviderProps> = ({ children }) => {
    const [expandedTextArea, setExpandedTextArea] = useState<string | null>(null);

    return (
        <TextAreaContext.Provider value={{ expandedTextArea, setExpandedTextArea }}>
            {children}
        </TextAreaContext.Provider>
    );
};
export  const TextArea: React.FC<TextAreaProps> = ({color, registername,isResize, ...props}) => {
    const {register} = useFormContext();
    const { expandedTextArea, setExpandedTextArea } = useContext(TextAreaContext);

    const isExpanded = expandedTextArea === registername;

    const toggleExpanded = () => {
        setExpandedTextArea(isExpanded ? null : registername);
    };
    return (
        <motion.div className={classNames(Styles.Input, color === 'primary' && Styles.primary)}
                    initial={{ height: isResize ? '45px' : '150px' }}
                    animate={{ height: isExpanded && isResize ? '150px' : isResize ? '45px' : '150px' }}
                    transition={{duration: 0.5}}
                    onClick={toggleExpanded}
                   >
            <textarea
                {...props} {...register(registername)}
            ></textarea>
        </motion.div>
    );
};