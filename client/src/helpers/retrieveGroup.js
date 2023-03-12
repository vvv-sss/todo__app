export const retrieveGroup = async (id) => {

    const url = `http://localhost:8000/api/groups/${id}`

    try {
        const response = await fetch(url);
        const group = await response.json();
        return group;
    } catch(error) {
        console.log(error);
    }

}