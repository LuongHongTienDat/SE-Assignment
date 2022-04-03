import {useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import { userInfo } from "./api/userApi";
import ErrorPage from "./components/Pages/404 Page/errorPage";

export const useAuth=()=>{
    const [user,setUser]= useState();
    var token = localStorage.getItem('user');
    
    useEffect(()=>{
        if(token ===undefined) return false;

        (async () => {
            const res = await userInfo(localStorage.getItem('user')); 
            if(res || res.message ===undefined)
            setUser(res);
        })()

    },[])
    

    if(user === undefined  || user.message!==undefined) return false;

    return true;
}

const ProtectRoutesUser = () => {
    
    const isAuth =useAuth();

    return isAuth ?<Outlet/> :<ErrorPage/>
}

export default ProtectRoutesUser;
