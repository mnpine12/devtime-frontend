import SignUpForm from '@Features/Auth/SignUp/SignUpForm';
import { FormEvent, useState } from 'react';
import logo from '@Assets/images/Logo.svg';
import { useQuery } from '@tanstack/react-query';
import { signupQueryOptions } from '@Api/Signup/signup.queries';
import { SignupItem } from '@Api/Signup/Signup.types';

const SignUp = () => {
    const [terms, setTerms] = useState<boolean>(false);
    const [formData, setFormData] = useState<SignupItem>({
        email: '',
        nickname: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (field: keyof SignupItem, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCheckDuplicate = () => {
        // 중복체크 api 로직
    };

    const handleCheckTerms = () => {};

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 페이지 새로고침 방지

        // 최종 유효성 검사
        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!terms) {
            alert('이용약관에 동의해주세요.');
            return;
        }

        const { data } = useQuery(signupQueryOptions(formData));

        console.log('폼 제출 : ', data);
    };

    return (
        <div className="bg-primary flex h-full w-full">
            <div className="flex h-full w-1/2 items-center justify-center">
                <img className="max-h-full max-w-full object-contain" src={logo} alt={logo} />
            </div>
            <div className="flex h-full w-1/2 items-center justify-center bg-white">
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
