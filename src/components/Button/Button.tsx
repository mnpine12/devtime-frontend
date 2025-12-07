interface ButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset';
    className: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button = ({ text, type, className, onClick, disabled }: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
