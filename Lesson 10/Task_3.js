async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error(`Todo request failed: ${response.status}`);
    }
    return response.json();
}

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`User request failed: ${response.status}`);
    }
    return response.json();
}

try {
    const allResult = await Promise.all([getTodo(), getUser()]);
    console.log('Promise.all -> todo:', allResult[0]);
    console.log('Promise.all -> user:', allResult[1]);

    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race -> first result:', raceResult);
} catch (error) {
    console.error('Request error:', error.message);
}
