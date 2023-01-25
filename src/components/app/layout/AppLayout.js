import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../static/layout/Header";


const AppLayout = () => {
    const location = useLocation();
    const { pathname } = location;
    const urlArray = pathname?.split("/");
    const URI = urlArray?.pop();

    return (
        <div className="theme_color pt-px	">
            <Header />
            <Outlet />

        </div>
    );
};

export default AppLayout;
