import { apiClient } from '@Api/apiClient';
import endpoints from '@Api/endPoints';

import { ResSignup, SignupItem } from './Signup.types';

export const signupApi = {
    signup: (data: SignupItem): Promise<ResSignup> =>
        apiClient.post<ResSignup, SignupItem>(endpoints.SIGNUP.signup, data),
    checkEmail: (email: string): Promise<ResSignup> =>
        apiClient.post<ResSignup, string>(endpoints.SIGNUP.checkEmail, email),
    checkNickname: (nickname: string): Promise<ResSignup> =>
        apiClient.post<ResSignup, string>(endpoints.SIGNUP.checkNickname, nickname),
};
