import React, { useEffect,useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);//we  want to change the DOM depend on this variable , so i made state variable
    //the mehtod to find online or offline should be called only once , so i can put it in useEffect
   
    const handleOnline=()=>{
        setIsOnline(true);
    };
    const handleOffline=()=>{
        setIsOnline(false);
    };
    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return()=>{//clean =>remove evnt listeners since u r creating this in body but even when u leave component it still there
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    });
    return isOnline;
}

export default useOnline;