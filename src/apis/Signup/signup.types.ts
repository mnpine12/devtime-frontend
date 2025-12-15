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

export interface ResCheckDuplicate {
    success: boolean;
    available: boolean;
    message: string;
    error?: {
        message: string;
        statusCode: number;
    };
}
