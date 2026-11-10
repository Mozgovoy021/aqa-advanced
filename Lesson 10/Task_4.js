const BASE_URL = 'https://jsonplaceholder.typicode.com';

class TodoService {
    async getTodo(id = 1) {
        const response = await fetch(`${BASE_URL}/todos/${id}`);
        if (!response.ok) {
            throw new Error(`Todo request failed: ${response.status}`);
        }
        return response.json();
    }
}

class UserService {
    async getUser(id = 1) {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        if (!response.ok) {
            throw new Error(`User request failed: ${response.status}`);
        }
        return response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

try {
    const allResult = await Promise.all([todoService.getTodo(), userService.getUser()]);
    console.log('Promise.all -> todo:', allResult[0]);
    console.log('Promise.all -> user:', allResult[1]);

    const raceResult = await Promise.race([todoService.getTodo(), userService.getUser()]);
    console.log('Promise.race -> first result:', raceResult);
} catch (error) {
    console.error('Request error:', error.message);
}
