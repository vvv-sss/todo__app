export const updateGroup = async (body, id) => {

    const url = `http://localhost:8000/api/groups/${id}`;

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(url, params);
        const group = await response.json();
        return group;
    } catch(error) {
        console.log(error)
    }
}