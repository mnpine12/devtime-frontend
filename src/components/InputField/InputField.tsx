import { ChangeEvent } from 'react';

interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    helperText?: string;
}

const InputField = ({ id, name, label, value, onChange, placeholder, disabled, helperText }: InputFieldProps) => {
    return (
        <div className="flex flex-col gap-3">
            <p className="body-sm m text-gray-600">{label}</p>
            <input
                type="text"
                className="w-[324px] h-[44px] rounded-sm border-none bg-gray-50 input-field"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />
            <p className="max-w-full h-5 caption m text-secondary-positive">{helperText}</p>
        </div>
    );
};

export default InputField;
