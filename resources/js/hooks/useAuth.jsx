import { useMutation, useQueryClient } from "react-query";
import * as api from "../api/authAPI";
// import { queryClient } from "../queryClient";
import { queryClient } from "@/queryClient";

const authUserQuery = () => ({
    queryKey: ["user"],
    queryFn: api.getUser,
});

export const useAuthUser = async () => {
    const query = authUserQuery();
    console.log(authUserQuery);

    return (
        queryClient.getQueriesData(query.queryKey) ??
        (await queryClient.fetchQuery(query).catch(() => undefined))
    );
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.login,
        onError: (error) => {
            console.log(error);
        },
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries(["auth"]);
            window.location.href = "/";
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: api.logout,
        onError: (error) => {
            console.log(error);
        },
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries(["auth"]);
            window.location.href = "/login";
        },
    });
};
