const AUTH = '/api/auth';
const SIGNUP = '/api/signup';

const endpoints = {
    AUTH: {
        login: `${AUTH}/login`,
        logout: `${AUTH}/logout`,
        refresh: `${AUTH}/refresh`,
    },
    SIGNUP: {
        signup: `${SIGNUP}`,
        checkEmail: `${SIGNUP}/check-email`,
        checkNickname: `${SIGNUP}/check-nickname`,
    },
};

export default endpoints;
