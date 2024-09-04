import Card from './Card';
import { RestaurentList } from '../constants'; //hardcoded swiggy data
import Shimmer from './Shimmer';
import { useState,useEffect ,useContext} from '../../node_modules/react';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useAllRestaurents from '../utils/useAllRestaurents';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body=()=>{
    const [searchTxt,setSearchText]=useState("");
    const [allRestaurents,setAllRestaurents]=useState([]);
    const [filterRestaurents,setFilterRestaurents]=useState([]);

   const {user,setUser}=useContext(UserContext);
    useEffect(()=>{
   getRestaurents();


    },[]);

    console.log("render");
    
   async function  getRestaurents(){
    const dataa=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await dataa.json();//it return a promise
    console.log(json);
    const list=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(list);
    setAllRestaurents(list);
    setFilterRestaurents(list); //since initially it is also empty so how it can render so fetch into this also

   }


    const isOnline=useOnline();
    if(!isOnline){
        return <h1 className=''>Offline Please Check Your Internet Connection </h1>
    }

   if(!allRestaurents)return null;//early return


    return (allRestaurents.length==0)?<Shimmer/>:(

        <>
    
        <div className='search-container p-5 bg-pink-50 my-5'>
        <input type="text" className=' focus-visible:bg-green-200 '  placeholder='search' value={searchTxt}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
        <button className='ml-4 p-2  bg-purple-900 text-white rounded-lg hover:bg-gray-400' onClick={()=>{
            //need to filter data
          const data=  filterData(searchTxt,allRestaurents);
            //update data
            setFilterRestaurents(data);
        }}>search</button>
   
   <input className='m-2' type="text" value={user.name} onChange={(e)=>{
                setUser({name:e.target.value})
        }}  />
     
      
        </div>
     


     
       <div className="cardsDiv flex flex-wrap justify-between hover:bg-green-300">
          {filterRestaurents.length==0? <h1>No Restaurent Matches Your Filter</h1> :

              filterRestaurents.map((list,index) => ( //using local state variable instead of main RestaurentList
    
                <Link key={list.info.id} to={`/restaurents/${list.info.id}`} style={{textDecoration:"none",color:"inherit"}}>
                <Card {...list} />
              </Link>
                ))
              
            }
            
                </div>



        </>
    );
};
export default Body;