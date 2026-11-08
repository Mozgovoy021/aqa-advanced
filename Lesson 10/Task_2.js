function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Todo request failed: ${response.status}`);
            }
            return response.json();
        });
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`User request failed: ${response.status}`);
            }
            return response.json();
        });
}

const allResult = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResult
    .then(([todo, user]) => {
        console.log('Promise.all -> todo:', todo);
        console.log('Promise.all -> user:', user);
    })
    .catch((error) => console.error('Promise.all error:', error.message));

raceResult
    .then((first) => console.log('Promise.race -> first result:', first))
    .catch((error) => console.error('Promise.race error:', error.message));
