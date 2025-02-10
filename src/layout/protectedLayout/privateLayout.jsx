import { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { isTokenExpired } from "../../utils/isTokenExpired";
import Navbar from "../../components/Navbar/Navbar";

const PrivateLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const createArticle = location.pathname.split("/")[1] === "create-article";
    const profile = location.pathname.split("/")[1] === "profile";


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }

        const expired = isTokenExpired(token);

        if (expired) {
            localStorage.removeItem("token")
            navigate("/login");
        }

    });


    return <>
    {createArticle || profile ? (
        <Navbar />
    ) : ""}
        <Outlet />
    </>;
};

export default PrivateLayout;