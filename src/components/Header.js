import { useState,useContext } from "react";
import {Link} from 'react-router-dom'
import UserContext from "../utils/UserContext";
import store from "../utils/store";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import useOnline from "../utils/useOnline";
const loggedInUser=()=>{
    //API call to authentication
    return true;
}

const Header=()=>{
    const {user}=useContext(UserContext)
const [isLoggedIn,setIsLoggedIn]=useState(true);
    const isOnline=useOnline();
const cartItems=useSelector(store=>store.cart.items);

    return (
        <div className="header flex justify-between shadow-lg sm:bg-yellow-100 md:bg-pink-50">
         <a><img data-testid="logo" className="h-24 sm:ml-[100%]" src={logo}></img> </a> 
        <div className="nav-items">
        <ul className=" md:flex  py-10 ">
        <li className="px-4"> <Link to='/'>Home</Link></li>

            <li className="px-4"> <Link to='/about'>About</Link></li>
            <li className="px-4"><Link to='/contactUs'>contact us</Link></li>
            <li className="px-4"><Link to ='/instamart'>InstaMart</Link></li>
            <li data-testid="items" className="px-4"> <Link to='/cart'>Cart- {cartItems.length} items</Link></li>

        
        </ul>
        </div>
        <h1 data-testid="isOnline" className="text-green-600 mt-6"> {isOnline ?"✔" :"X"}</h1>
        <h1 className="p-10 font-serif hover:text-lime-500">user: {user.name}</h1>
        {
            isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}} >LogOut</button>:<button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
        }
        </div>
      

    );
};

export default Header;