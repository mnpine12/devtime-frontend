import { Button, InputField, InputFieldWithButton } from '@Components/index';
import { FormData } from '@Pages/Auth/SignUp';
import { FormEvent } from 'react';

interface SignUpFormProps {
    formData: FormData;
    onChange: (field: keyof FormData, value: string | boolean) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onCheckDuplicate: (field: 'userId' | 'userName') => void;
}

const SignUpForm = ({ formData, onChange, onSubmit, onCheckDuplicate }: SignUpFormProps) => {
    return (
        <div className="w-[420px] flex flex-col gap-10">
            <p className="flex-1 heading b text-primary text-center mb-4">회원가입</p>
            <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
                <InputFieldWithButton
                    id="userId"
                    name="userId"
                    label="아이디"
                    value={formData.userId}
                    onChange={(e) => onChange('userId', e.target.value)}
                    buttonText="중복 확인"
                    placeholder="이메일 주소 형식으로 입력해 주세요."
                    onButtonClick={() => onCheckDuplicate('userId')}
                />
                <InputFieldWithButton
                    id="userName"
                    name="userName"
                    label="닉네임"
                    value={formData.userName}
                    onChange={(e) => onChange('userName', e.target.value)}
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
                    <label className="label m gray-600">이용약관</label>
                </div>
                <Button type="submit" className="btn-submit" text="회원가입" />
            </form>
        </div>
    );
};

export default SignUpForm;
