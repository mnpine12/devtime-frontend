import clsx from 'clsx';

interface InputFieldProps extends React.ComponentProps<'input'> {
    label: string;
    helperText?: string;
    error?: boolean;
}

const InputField = ({
    label,
    id,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    disabled,
    helperText,
    error,
}: InputFieldProps) => {
    return (
        <div className="flex w-full flex-col gap-3">
            <p className="body-sm m text-gray-600">{label}</p>
            <input
                className="input-field h-[44px] w-full rounded-sm border-none bg-gray-50"
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />
            <p
                className={clsx(
                    error ? 'text-secondary-negative' : 'text-secondary-positive',
                    'caption m h-5 max-w-full',
                )}
            >
                {helperText}
            </p>
        </div>
    );
};

export default InputField;
