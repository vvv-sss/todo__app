export const retrieveTODO = async (id) => {

    const url = `http://localhost:8000/api/todos/${id}`

    try {
        const response = await fetch(url);
        const todo = await response.json();
        return todo;
    } catch(error) {
        console.log(error);
    }

}