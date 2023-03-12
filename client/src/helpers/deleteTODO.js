export const deleteTODO = async (id) => {
    
    const url = `http://localhost:8000/api/todos/${id}`;

    const params = {
        method: 'DELETE'
    }

    try {
        const response = await fetch(url, params);
    } catch(error) {
        console.log(error)
    }
}