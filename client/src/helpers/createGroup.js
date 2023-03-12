export const createGroup = async (group) => {

    const url = 'http://localhost:8000/api/groups';
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
    }

    try {
        const response = await fetch(url, params);
        const group = await response.json();
        return group;
    } catch(error) {
        console.log(error)
    }

}