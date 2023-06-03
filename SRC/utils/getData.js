const URL = 'https://coding-challenge-api.aerolab.co/products';


const API = 'eyJhbGciOiJIUzI1NiIsInR 5cCI6IkpXVCJ9. eyJfaWQiOiI2NDcyZTJhMDViODE4OD AwMTk1ZTgxMmEiLCJpYXQiOjE2ODUy NTA3MjB9. nRlNqnbmauv5Wk4BiMUbqUR1nqaSTD GJX-YALtHO7JU';
const getData = async (id) => {
    //hacemos un ternario,donde si viene un id,que venga toda la api con ese id que necesitamos del producto
    //por interpoblacion tomamos un la API y un ID
    const apiURL = id ? `${API} ${id}` : URL;
    //console.log(apiURL)

    try {
        const response = await fetch (apiURL , {
            headers: {
                Authorization: `Bearer ${API}`
            }
        });

        const data = response.json();
        return data;
    } catch(error){
        console.log('fetch error!', error)
    };
};

export default getData;