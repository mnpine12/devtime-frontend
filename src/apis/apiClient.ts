export const apiClient = {
    get: async <T>(endpoint: string, params?: Record<string, string>): Promise<T> => {
        try {
            let url = endpoint;

            if (params) {
                const queryString = new URLSearchParams(params).toString();
                url += `?${queryString}`;
            }

            const response = await fetch(`${url}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            return response.json();
        } catch (error) {
            console.error('API 호출 실패 : ', endpoint, error);
            throw error;
        }
    },
    post: async <T, D>(endpoint: string, data: D): Promise<T> => {
        try {
            const response = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('API 호출 실패 : ', endpoint, error);
            throw error;
        }
    },
};
