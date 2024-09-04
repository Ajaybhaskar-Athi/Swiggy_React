import { useState,useEffect } from "react"; 

const useAllRestaurents=()=>{

    const [allRestaurents,setAllRestaurents]=useState([]);


    useEffect(()=>{
   getRestaurents();


    },[]); 
    
   async function  getRestaurents(){
    const dataa=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await dataa.json();//it return a promise
    // console.log(json);
    const list=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(list);
    setAllRestaurents(list);
   }
   return allRestaurents;


}

export default useAllRestaurents;