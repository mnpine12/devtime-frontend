import { Button } from '@Components/Button';
import { ChangeEvent } from 'react';

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
        <div className="flex flex-col gap-3">
            <p className="body-sm m text-gray-600">{label}</p>
            <div className="flex flex-row h-[44px] gap-4">
                <input
                    type="text"
                    className="input-field"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                <Button
                    type="button"
                    className="btn-primary-light sm btn-dup"
                    text={buttonText}
                    onClick={onButtonClick}
                    disabled={value === ''}
                />
            </div>
            <p className="max-w-full h-5 caption m text-secondary-positive">{helperText}</p>
        </div>
    );
};

export default InputFieldWithButton;
