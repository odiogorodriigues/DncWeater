import axios from "axios";

const apiTempo = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
});

export default apiTempo;

