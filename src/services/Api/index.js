const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
    },
}));

export default class APIManager {
    static async registerUser(email, password) {
        const response = await API.post('/auth/register', { email, password });
        return response.data;
    }
}
