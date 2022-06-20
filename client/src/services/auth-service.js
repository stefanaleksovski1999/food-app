import axios from 'axios';

const API_URL = '/accounts'

const Signup = () => {
    return axios
        .post(API_URL + '/', {
            email,
            password,
        })
}
 
export default Signup;