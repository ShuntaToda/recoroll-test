import React, { useState } from "react";
import { useLogin } from "@/hooks/useAuth";

export const LoginPage = () => {
    const login = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        // e.preventDefault();
        e.preventDefault();
        console.log(email, password);
        login.mutate({
            email: email,
            password: password,
        });
    };
    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="email">メールアドレス：</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            defaultValue={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">パスワード：</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            defaultValue={password}
                        />
                    </div>
                    <button type="submit">送信</button>
                </fieldset>
            </form>
        </div>
    );
};
