export const userLogout = async () => {

    const url = 'http://localhost:8000/api/logout';

    try {
        const response = await fetch(url);
        const msg = await response.json();
        console.log(msg);
    } catch(error) {
        console.log(error)
    }

}