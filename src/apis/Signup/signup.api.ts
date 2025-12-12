import { apiClient } from '@Api/apiClient';
import endpoints from '@Api/endPoints';

import { ResCheckDuplicate, ResSignup, SignupItem } from './signup.types';

export const signupApi = {
    signup: (data: SignupItem): Promise<ResSignup> =>
        apiClient.post<ResSignup, SignupItem>(endpoints.SIGNUP.signup, data),
    checkEmail: (email: string): Promise<ResCheckDuplicate> =>
        apiClient.get<ResCheckDuplicate>(endpoints.SIGNUP.checkEmail, { email }),
    checkNickname: (nickname: string): Promise<ResCheckDuplicate> =>
        apiClient.get<ResCheckDuplicate>(endpoints.SIGNUP.checkNickname, { nickname }),
};
