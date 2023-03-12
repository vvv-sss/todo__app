export const createTODO = async (task) => {

    const url = 'http://localhost:8000/api/todos';
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }

    try {
        const response = await fetch(url, params);
        const todo = await response.json();
        return todo;
    } catch(error) {
        console.log(error)
    }

}