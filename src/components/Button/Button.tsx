interface ButtonProps extends React.ComponentProps<'button'> {
    text: string;
}

const Button = ({ text, type, className, onClick, disabled }: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
