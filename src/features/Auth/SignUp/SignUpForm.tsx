import { Button, InputField, InputFieldWithButton } from '@Components/index';
import { ChangeEvent, FormEvent, useState } from 'react';

interface SignUpFormProps {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
    const [formData, setFormData] = useState({
        userId: '',
        userName: '',
        password: '',
        confirmPassword: '',
        isAgreed: false,
    });

    // 입력값 저장
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 중복 체크 버튼 동작
    const checkDuplicate = () => {};

    return (
        <form onSubmit={onSubmit}>
            <InputFieldWithButton
                id="userId"
                name="userId"
                label="아이디"
                value={formData.userId}
                onChange={handleChange}
                buttonText="중복 확인"
                onButtonClick={checkDuplicate}
            />
            <InputFieldWithButton
                id="userName"
                name="userName"
                label="닉네임"
                value={formData.userName}
                onChange={handleChange}
                buttonText="중복 확인"
                onButtonClick={checkDuplicate}
            />
            <InputField
                id="password"
                name="password"
                label="닉네임"
                value={formData.password}
                onChange={handleChange}
            />
            <InputField
                id="confirmPassword"
                name="confirmPassword"
                label="닉네임"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <Button type="submit" className="btn-submit">
                회원가입
            </Button>
        </form>
    );
};

export default SignUpForm;
