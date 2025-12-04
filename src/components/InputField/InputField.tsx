import { ChangeEvent } from 'react';
import './index.css';

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

const InputField = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  disabled,
  helperText,
}: InputFieldProps) => {
  return (
    <div>
      <div className="inputField-wrapper">
        <label>{label}</label>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      <span className="helperText">{helperText}</span>
    </div>
  );
};

export default InputField;
