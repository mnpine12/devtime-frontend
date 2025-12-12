import React from 'react';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type' | 'onChange'> {
    label: string;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange, ...props }: CheckboxProps) => {
    return (
        <div className="flex items-center gap-3">
            <p className="body-sm m text-primary">{label}</p>
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} {...props} />
        </div>
    );
};

export default Checkbox;
