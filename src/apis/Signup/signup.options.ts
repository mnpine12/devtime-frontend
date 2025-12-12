import { mutationOptions } from '@tanstack/react-query';

import { signupApi } from './signup.api';
import { SignupItem } from './signup.types';

export const signupOptions = (data: SignupItem) => {
    return mutationOptions({
        mutationKey: ['signup'],
        mutationFn: () => signupApi.signup(data),
    });
};

export const checkEmailOptions = (email: string) => {
    return mutationOptions({
        mutationKey: ['checkEmail'],
        mutationFn: () => signupApi.checkEmail(email),
    });
};

export const checkNicknameOptions = (nickname: string) => {
    return mutationOptions({
        mutationKey: ['checkNickname'],
        mutationFn: () => signupApi.checkNickname(nickname),
    });
};
