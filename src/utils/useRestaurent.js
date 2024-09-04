import { useState ,useEffect} from "react"
import { MENU_API_LINK } from "../constants";

const useRestaurent=((resId)=>{
    const [resInfo,setResInfo]= useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const dataa=await fetch(MENU_API_LINK+resId);
        const json=await dataa.json();
        console.log(json);
        setResInfo(json);
    }
    return resInfo;


});
export default useRestaurent;