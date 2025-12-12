export interface SignupItem {
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
}

export interface ResSignup {
    success: boolean;
    message: string;
}
