import { SignupItem } from '@Api/Signup/Signup.types';
import { Button, InputField, InputFieldWithButton } from '@Components/index';
import { FormEvent } from 'react';

interface SignUpFormProps {
    formData: SignupItem;
    onChange: (field: keyof SignupItem, value: string | boolean) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onCheckDuplicate: (field: 'userId' | 'userName') => void;
}

const SignUpForm = ({ formData, onChange, onSubmit, onCheckDuplicate }: SignUpFormProps) => {
    return (
        <div className="flex w-[420px] flex-col gap-10">
            <p className="heading b text-primary mb-4 flex-1 text-center">회원가입</p>
            <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                <InputFieldWithButton
                    id="userId"
                    name="userId"
                    label="아이디"
                    value={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    buttonText="중복 확인"
                    placeholder="이메일 주소 형식으로 입력해 주세요."
                    onButtonClick={() => onCheckDuplicate('userId')}
                />
                <InputFieldWithButton
                    id="userName"
                    name="userName"
                    label="닉네임"
                    value={formData.nickname}
                    onChange={(e) => onChange('nickname', e.target.value)}
                    buttonText="중복 확인"
                    placeholder="닉네임을 입력해 주세요."
                    onButtonClick={() => onCheckDuplicate('userId')}
                />
                <InputField
                    id="password"
                    name="password"
                    label="비밀번호"
                    value={formData.password}
                    placeholder="비밀번호를 입력해 주세요."
                    onChange={(e) => onChange('password', e.target.value)}
                />
                <InputField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="비밀번호 확인"
                    value={formData.confirmPassword}
                    placeholder="비밀번호를 다시 입력해 주세요."
                    onChange={(e) => onChange('confirmPassword', e.target.value)}
                />
                <div>
                    <p className="body-sm m text-gray-600">이용약관</p>
                </div>
                <Button type="submit" className="btn-primary lg" text="회원가입" />
            </form>
        </div>
    );
};

export default SignUpForm;
