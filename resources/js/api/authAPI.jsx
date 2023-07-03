import axios from "axios";

export const getUser = async () => {
    const { data } = await axios.get("/api/user");
    console.log(data);
    return data;
};

export const login = async ({ email, password }) => {
    const { data } = await axios.post("/api/login", { email, password });
    console.log(data);
    return data;
};

export const logout = async () => {
    const { data } = await axios.post("/api/logout");
    console.log(data);
    return data;
};
