import Logo from '@assets/images/Logo.svg';
import SignUpForm from '@features/Auth/SignUp/SignUpForm';
import { FormEvent } from 'react';
import './index.css';

const SignUp = () => {
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    console.log('폼 제출 : ', e.target);
  };

  return (
    <div className="cont-body">
      <div className="logo-wrapper">
        <img src={Logo} alt={Logo} />
      </div>
      <div className="form-wrapper">
        <SignUpForm onSubmit={handleSignUp} />
      </div>
    </div>
  );
};

export default SignUp;
