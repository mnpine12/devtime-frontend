export interface SignupState {
    emailChecked: boolean;
    nicknameChecked: boolean;
    termsAccepted: boolean;
    emailHelperTxt: string;
    nicknameHelperTxt: string;
    pwdHelperTxt: string;
    confPwdHelperTxt: string;
}

export interface SignupError {
    email: boolean;
    nickname: boolean;
    password: boolean;
    confirmPassword: boolean;
}

export enum HelperTxt {
    email = 'emailHelperTxt',
    nickname = 'nicknameHelperTxt',
    password = 'pwdHelperTxt',
    confirmPassword = 'confPwdHelperTxt',
}
