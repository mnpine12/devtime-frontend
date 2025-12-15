export const validateEmail = (email: string): string | null => {
    if (!email.trim()) return '이메일을 입력해 주세요.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return '이메일 형식으로 작성해 주세요.';

    return null;
};

export const validateNickname = (nickname: string): string | null => {
    if (!nickname.trim()) return '닉네임을 입력해 주세요.';
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password.trim()) return '비밀번호를 입력해 주세요.';

    const lengthValid = password.length >= 8;
    const combinationValid = /[A-Za-z]/.test(password) && /\d/.test(password);

    if (!lengthValid || !combinationValid) return '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.';

    return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
    if (!confirmPassword.trim()) return '비밀번호 확인을 입력해 주세요.';
    if (password !== confirmPassword) return '비밀번호가 일치하지 않습니다.';
    return null;
};
