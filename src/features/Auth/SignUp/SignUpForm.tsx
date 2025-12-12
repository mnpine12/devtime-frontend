import { SignupItem } from '@Api/Signup/signup.types';
import { Button, Checkbox, InputField } from '@Components/index';
import { validateConfirmPassword, validateEmail, validateNickname, validatePassword } from '@Utils/validate';
import { FormEvent, useEffect } from 'react';
import { TERMS_TEXT } from './data';
import { HelperTxt, SignupError, SignupState } from '@Pages/Auth/Signup/signup.type';

interface SignUpFormProps {
    formData: SignupItem;
    signupState: SignupState;
    error: SignupError;
    onChange: (field: keyof SignupItem, value: string) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onCheckDuplicate: (field: 'email' | 'nickname', value: string) => void;
    onChangeState: (field: keyof SignupState, value: string | boolean) => void;
    onChangeError: (field: keyof SignupItem, value: boolean) => void;
}

const validators = {
    email: (value: string) => validateEmail(value),
    nickname: (value: string) => validateNickname(value),
    password: (value: string) => validatePassword(value),
} as const;

const validateConfirm = (value: string, pwd: string) => validateConfirmPassword(value, pwd);

const SignUpForm = ({
    formData,
    signupState,
    error,
    onChange,
    onSubmit,
    onCheckDuplicate,
    onChangeState,
    onChangeError,
}: SignUpFormProps) => {
    useEffect(() => {
        if (!formData.confirmPassword) {
            // 비밀번호 확인이 비어 있으면 helperText 안띄움
            onChangeError('confirmPassword', false);
            onChangeState(HelperTxt['confirmPassword'], '');
            return;
        }

        const msg = validateConfirm(formData.confirmPassword, formData.password);
        onChangeError('confirmPassword', Boolean(msg));
        onChangeState(HelperTxt['confirmPassword'], msg ?? '');
    }, [formData.password, formData.confirmPassword]);

    const handleInput = (field: keyof SignupItem, value: string) => {
        onChange(field, value);

        if (field === 'confirmPassword') {
            const msg = validateConfirm(value, formData.password);
            onChangeError(field, Boolean(msg));
            onChangeState(HelperTxt[field], msg ?? '');
            return;
        }

        const validator = validators[field as keyof typeof validators];
        if (validator) {
            const msg = validator(value);
            onChangeError(field, Boolean(msg));
            onChangeState(HelperTxt[field], msg ?? '');
        }
    };

    return (
        <div className="flex w-[420px] flex-col gap-10">
            <p className="heading b text-primary mb-4 flex-1 text-center">회원가입</p>
            <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                <div className="flex w-full items-center gap-4">
                    <InputField
                        id="userId"
                        name="userId"
                        label="아이디"
                        value={formData.email}
                        onChange={(e) => handleInput('email', e.target.value)}
                        placeholder="이메일 주소 형식으로 입력해 주세요."
                        helperText={signupState.emailHelperTxt}
                        error={error.email}
                        required
                    />
                    <Button
                        type="button"
                        className="btn-primary-light sm btn-dup"
                        text="중복확인"
                        onClick={() => onCheckDuplicate('email', formData.email)}
                        disabled={formData.email === ''}
                    />
                </div>
                <div className="flex w-full items-center gap-4">
                    <InputField
                        id="userName"
                        name="userName"
                        label="닉네임"
                        value={formData.nickname}
                        onChange={(e) => handleInput('nickname', e.target.value)}
                        placeholder="닉네임을 입력해 주세요."
                        helperText={signupState.nicknameHelperTxt}
                        error={error.nickname}
                        required
                    />
                    <Button
                        type="button"
                        className="btn-primary-light sm btn-dup"
                        text="중복확인"
                        onClick={() => onCheckDuplicate('nickname', formData.nickname)}
                        disabled={formData.nickname === ''}
                    />
                </div>
                <InputField
                    id="password"
                    name="password"
                    label="비밀번호"
                    type="password"
                    value={formData.password}
                    placeholder="비밀번호를 입력해 주세요."
                    onChange={(e) => handleInput('password', e.target.value)}
                    helperText={signupState.pwdHelperTxt}
                    error={error.password}
                    required
                />
                <InputField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="비밀번호 확인"
                    type="password"
                    value={formData.confirmPassword}
                    placeholder="비밀번호를 다시 입력해 주세요."
                    onChange={(e) => handleInput('confirmPassword', e.target.value)}
                    helperText={signupState.confPwdHelperTxt}
                    error={error.confirmPassword}
                    required
                />
                <div className="mb-5">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="body-sm m text-gray-600">이용약관</p>
                        <Checkbox
                            label="동의함"
                            checked={signupState.termsAccepted}
                            onChange={(check) => onChangeState('termsAccepted', check)}
                        />
                    </div>
                    <textarea
                        className="w-full resize-none bg-gray-50 px-5 py-4 text-sm text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:outline-none"
                        value={TERMS_TEXT}
                        rows={6}
                        readOnly
                    />
                </div>
                <Button type="submit" className="btn-primary lg" text="회원가입" />
            </form>
        </div>
    );
};

export default SignUpForm;
