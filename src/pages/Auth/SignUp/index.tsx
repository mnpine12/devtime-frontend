import SignUpForm from '@Features/Auth/Signup/SignupForm';
import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { checkEmailOptions, checkNicknameOptions, signupOptions } from '@Api/Signup/signup.options';
import { ResCheckDuplicate, SignupItem } from '@Api/Signup/signup.types';
import { Link } from '@tanstack/react-router';
import logo from '@Assets/images/Logo.svg';
import { HelperTxt, SignupError, SignupState } from './signup.type';

const SignUp = () => {
    const [formData, setFormData] = useState<SignupItem>({
        email: '',
        nickname: '',
        password: '',
        confirmPassword: '',
    });
    const [signupState, setSignupState] = useState<SignupState>({
        emailChecked: false,
        nicknameChecked: false,
        termsAccepted: false,
        emailHelperTxt: '',
        nicknameHelperTxt: '',
        pwdHelperTxt: '',
        confPwdHelperTxt: '',
    });
    const [error, setError] = useState<SignupError>({
        email: false,
        nickname: false,
        password: false,
        confirmPassword: false,
    });

    const { mutateAsync: checkEmail } = useMutation(checkEmailOptions(formData.email));
    const { mutateAsync: checkNickname } = useMutation(checkNicknameOptions(formData.nickname));
    const { mutateAsync: signup } = useMutation(signupOptions(formData));

    const handleChange = (field: keyof SignupItem, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleError = (field: keyof SignupItem, value: boolean) => setError((prev) => ({ ...prev, [field]: value }));

    const handleChangeState = (field: keyof SignupState, value: string | boolean) => {
        setSignupState((prev) => ({ ...prev, [field]: value }));
    };

    const handleResponseMsg = (field: keyof SignupState, field2: keyof SignupState, response: ResCheckDuplicate) => {
        if (response.error) {
            handleChangeState(field, response.error.message);
            return;
        }
        if (response.available) handleChangeState(field2, true);
        handleChangeState(field, response.message);
    };

    const handleCheckDuplicate = async (field: 'email' | 'nickname') => {
        switch (field) {
            case 'email':
                if (!formData.email.trim()) {
                    handleChangeState('emailChecked', false);
                    handleChangeState(HelperTxt[field], '이메일을 입력하세요.');
                    handleError(field, true);
                    return;
                }
                const emailRes = await checkEmail();
                if (emailRes.available) {
                    handleError(field, false);
                } else {
                    handleError(field, true);
                }
                handleResponseMsg(HelperTxt[field], 'emailChecked', emailRes);

                break;
            case 'nickname':
                if (!formData.nickname.trim()) {
                    handleChangeState('nicknameChecked', false);
                    handleChangeState(HelperTxt[field], '닉네임을 입력하세요.');
                    handleError(field, true);
                    return;
                }
                const nicknameRes = await checkNickname();
                if (nicknameRes.available) {
                    handleError(field, false);
                } else {
                    handleError(field, true);
                }
                handleResponseMsg(HelperTxt[field], 'nicknameChecked', nicknameRes);
                break;
        }
    };

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 페이지 새로고침 방지

        if (!signupState.emailChecked || !signupState.nicknameChecked) {
            alert('이메일과 닉네임의 중복을 체크해주세요.');
            return;
        }

        if (!error.password) {
            alert('유효한 비밀번호가 아닙니다.');
        }

        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!signupState.termsAccepted) {
            alert('이용약관에 동의해주세요.');
            return;
        }

        const result = await signup();
        alert(result.message);
    };

    return (
        <div className="bg-primary flex h-full w-full">
            <div className="flex h-full w-1/2 items-center justify-center">
                <img className="max-h-full max-w-full object-contain" src={logo} alt={logo} />
            </div>
            <div className="flex h-full w-1/2 flex-col items-center justify-center bg-white">
                <SignUpForm
                    formData={formData}
                    signupState={signupState}
                    error={error}
                    onChange={handleChange}
                    onSubmit={handleSignUp}
                    onCheckDuplicate={handleCheckDuplicate}
                    onChangeState={handleChangeState}
                    onChangeError={handleError}
                />
                <p className="body r text-primary mt-5">
                    회원이신가요?
                    <Link className="hover:text-primary-hover ml-5 font-bold" to="/login">
                        로그인 바로가기
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
