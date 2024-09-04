import { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";

const Footer=()=>{
    const {user}=useContext(UserContext);
    console.log(user);
    useEffect(()=>{
        console.log("re rendered");
    })
    return(
        <h4 className=" flex justify-center text-lg font-semibold text-amber-400">Owner:{user.name}. Contact : {user.email}</h4>
                    );
};

export default Footer;