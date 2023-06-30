import axios from "axios";
import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const TopPage = () => {
    const location = useLocation();
    const getOAuthUrl = async () => {
        const { data } = await axios.get(`/api/auth/google`);
        return data;
    };

    const login = async () => {
        // window.location.href = await getOAuthUrl();
        const url = await getOAuthUrl();
        console.log(url);
        const u = new URL(url);
        const searchPramas = new URLSearchParams(u.search);
        for (let param of searchPramas) {
            console.log(param);
        }
        // useMutation(getOAuthUrl, {
        //     onSuccess: (data) => {
        //         console.log(data)
        //         //   window.location.href = data;

        //     }
        // })
    };
    return <div onClick={login}>TopPage</div>;
};
