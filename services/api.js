//https://sujeitoprogramador.com/r-api/?api=filmes

import Axios from "react-native-axios";


const api = Axios.create({
    baseURL:'https://sujeitoprogramador.com/'
});

export default api;