import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
export default function Conditional() {
const auth = localStorage.getItem('token');
// if(auth){console.log(auth)}
// else{console.log('No token')}
return auth ?<Outlet/>:<Navigate to="signup"></Navigate>
}
