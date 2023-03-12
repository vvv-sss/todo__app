export const updateTODO = async (body, id) => {

    const url = `http://localhost:8000/api/todos/${id}`;

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(url, params);
        const todo = await response.json();
        return todo;
    } catch(error) {
        console.log(error)
    }
}