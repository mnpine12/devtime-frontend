import { ChangeEvent } from 'react';

import './index.css';

interface InputFieldWithButtonProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    buttonText: string;
    onButtonClick: () => void;
    placeholder?: string;
    disabled?: boolean;
    helperText?: string;
}

const InputFieldWithButton = ({
    id,
    name,
    label,
    value,
    onChange,
    buttonText,
    onButtonClick,
    placeholder,
    disabled,
    helperText,
}: InputFieldWithButtonProps) => {
    return (
        <div>
            <div className="inputField-wrapper">
                <label>{label}</label>
                <div className="input-with-button">
                    <input
                        type="text"
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                    <button type="button" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
            <span className="helperText">{helperText}</span>
        </div>
    );
};

export default InputFieldWithButton;
