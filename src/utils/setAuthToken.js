// This function set the token in the header of each axios request
// If token doesn't exist it deletes the token from the header

import axios from "axios";
const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
export default setAuthToken;
