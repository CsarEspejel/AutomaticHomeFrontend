import Axios from 'axios';

const AuthService = async (credenciales) => {
    try{
        const {data} = await Axios.post(
            "http://localhost:8000/api/login",
            credenciales
        );
        return data;
    }catch(error){
        return error;
    }
}

export default AuthService;