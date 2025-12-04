import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary'; // 색상 옵션
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  className,
  //   variant,
  //   size,
  onClick,
  disabled,
}: ButtonProps) => {
  //   const classNames = `${styles[variant]} ${styles[size]}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
