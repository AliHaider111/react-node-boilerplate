import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Loader from "../../../assets/loader/loader";
import Header from './Header';
const Layout = () => {
    const loader = useSelector(state => state.loader)
    return (
        <div className="mx-auto max-w-7xl px-6">
            {!loader || <Loader />}
            <Header />
            <Outlet />
           
        </div>
    )
}

export default Layout
