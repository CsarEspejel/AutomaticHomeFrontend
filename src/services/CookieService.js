import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default {
    getCookie: (key) => 
        cookies.get(key),
    setCookie: (key, value, options) =>
        cookies.set(key, value, options),
    removeCookie: (key) =>
        cookies.remove(key),
    
}