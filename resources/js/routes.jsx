import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginPage } from "@/page/Login";
import { DashboardPage } from "@/page/Dashboard";
import { useAuthUser } from "@/hooks/useAuth";

const guardLoader = async () => {
    const user = await useAuthUser();
    return user[0] ? true : redirect("/login");
};

const guestLoader = async () => {
    const user = await useAuthUser();

    console.log(user);
    return user[0] ? redirect("/") : true;
    return true;
};

export const router = createBrowserRouter([
    {
        path: "login",
        element: <LoginPage></LoginPage>,
        loader: guestLoader,
    },
    {
        path: "/",
        element: <DashboardPage></DashboardPage>,
        loader: guardLoader,
    },
]);
