export const getTODOs = async (userId) => {

    const url = `http://localhost:8000/api/todos?userId=${userId}`

    try {
        const response = await fetch(url);
        const todos = await response.json();
        return todos;
    } catch(error) {
        console.log(error);
    }
    
}