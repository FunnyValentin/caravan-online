import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER_URL + "/auth"

export const login = async (data) => {
    console.log(SERVER + "/login");
    const response = await axios.post(SERVER + "/login", data);
    return response.data;
}
