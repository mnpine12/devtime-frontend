import SignUpForm from '@Features/Auth/SignUp/SignUpForm';
import { FormEvent, useState } from 'react';
import logo from '@Assets/images/Logo.svg';

export interface FormData {
    userId: string;
    userName: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        userId: '',
        userName: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const handleChange = (field: keyof FormData, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCheckDuplicate = () => {
        // 중복체크 api 로직
    };

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 페이지 새로고침 방지

        // 최종 유효성 검사
        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!formData.terms) {
            alert('이용약관에 동의해주세요.');
            return;
        }

        console.log('폼 제출 : ', e.target);
    };

    return (
        <div className="w-full h-full flex bg-primary">
            <div className="w-1/2 h-full flex items-center justify-center">
                <img className="max-w-full max-h-full object-contain" src={logo} alt={logo} />
            </div>
            <div className="w-1/2 h-full flex items-center justify-center bg-white">
                <SignUpForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSignUp}
                    onCheckDuplicate={handleCheckDuplicate}
                />
            </div>
        </div>
    );
};

export default SignUp;
