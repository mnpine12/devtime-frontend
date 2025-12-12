import { queryOptions } from '@tanstack/react-query';

import { signupApi } from './signup.api';
import { SignupItem } from './Signup.types';

export const signupQueryOptions = (data: SignupItem) => {
    return queryOptions({
        queryKey: ['signup'],
        queryFn: () => signupApi.signup(data),
    });
};

export const checkEmailQueryOptions = (email: string) => {
    return queryOptions({
        queryKey: ['checkEmail'],
        queryFn: () => signupApi.checkEmail(email),
    });
};

export const checkNicknameQueryOptions = (nickname: string) => {
    return queryOptions({
        queryKey: ['checkNickname'],
        queryFn: () => signupApi.checkNickname(nickname),
    });
};
