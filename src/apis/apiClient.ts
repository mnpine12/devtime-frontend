export const apiClient = {
    get: async <T>(endpoint: string): Promise<T> => {
        const response = await fetch(`${endpoint}`);
        if (!response.ok) {
            throw new Error('API 요청 실패');
        }
        return response.json();
    },
    post: async <T, D>(endpoint: string, data: D): Promise<T> => {
        const response = await fetch(`${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('API 요청 실패');
        return response.json();
    },
};
