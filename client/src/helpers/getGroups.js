export const getGroups = async () => {

    const url = 'http://localhost:8000/api/groups'

    try {
        const response = await fetch(url);
        const groups = await response.json();
        return groups;
    } catch(error) {
        console.log(error);
    }
    
}