import React, { useEffect } from "react";

export const SocialLoginProress = () => {
    const socialLogin = async () => {
        const { data } = await axios.get(`/api/auth/google/callback`, {
            onSuccess: () => {
                useNavigate("/");
            },
        });
        console.log(data);
        return data;
    };
    useEffect(() => {
        socialLogin();
    }, [provider, socialLogin]);
    return <div>SocialLoginProress</div>;
};
