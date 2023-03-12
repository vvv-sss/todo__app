export const userLogin = async (user) => {

    const url = 'http://localhost:8000/api/login';
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    try {
        const response = await fetch(url, params);
        const token = await response.json();
        return token;
    } catch(error) {
        console.log(error)
    }

}