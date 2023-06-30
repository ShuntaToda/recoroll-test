import axios from "axios";

export const getUser = async () => {
    const { data } = await axios.get("/api/user");
    return data;
};

export const login = async ({ email, password }) => {
    const { data } = await axios.post("/api/login", { email, password });
    return data;
};

export const logout = async () => {
    const { data } = await axios.post("/api/logout");
    return data;
};
