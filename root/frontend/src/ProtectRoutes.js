import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { userInfo } from "./api/userApi";
import AdminLogin from "./components/Pages/Admin/AdminLogin/adminLogin";

const useAuth=()=>{
    var user;
    var token = localStorage.getItem('user');
    if(token ===undefined) return false;

    (async () => {
        const res = await userInfo(localStorage.getItem('user')); 
        user=res;
    })()

    if(user === undefined || user.roleUser ==="customer" || user.message===undefined) return false;

    return true;
}

const ProtectRoutes = () => {
    
    const isAuth =useAuth();
    return isAuth ?<Outlet/> :<AdminLogin/>
}

export default ProtectRoutes;
