export const userTokenRefresh = async (token) => {

    const url = 'http://localhost:8000/api/refresh';
    const params = {
        method: 'POST',
        headers: {
            Authorization: `${token}`
        }
    }

    try {
        const response = await fetch(url, params);
        const token = await response.json();
        return token;
    } catch(error) {
        console.log(error)
    }

}