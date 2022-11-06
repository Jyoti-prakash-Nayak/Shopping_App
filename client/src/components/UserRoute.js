import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

const UserRoute=({component:Component,...rest})=>{
     
    return isAuthenticated() && isAuthenticated().role === 0 ? (
		<Outlet />
	) : (
		<Navigate to='/signin' />
	);
     
};

export default UserRoute;