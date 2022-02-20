// This function checks if the user is autheticaticated or not
// It checks if token exists
// It checks the validity of the token
// It takes the token from the local storage

import jwt_decode from "jwt-decode";
const isAuth = ()=>{
    const token = localStorage.jwtToken;

    if(token)
    {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) return false;
        return true;
    }
    return false;
}

export default isAuth;