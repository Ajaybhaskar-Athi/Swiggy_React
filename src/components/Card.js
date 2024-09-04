import  {IMG_CDN_LINK} from '../constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const Card=(props)=>{

  const {user}=useContext(UserContext);
    //   console.log(props);
      const {name,cloudinaryImageId,cuisines,avgRating,id}=props.info;
      return (
          <div className="card p-5 m-5 w-56 shadow-lg bg-pink-50  hover:odd:bg-red-400 " >
     <img className='max-h-24' src={IMG_CDN_LINK+cloudinaryImageId} ></img>
          <h3 className='font-bold  text-md'>{name}</h3>
          <p className='font-semibold'>{cuisines.join(",")}</p> 
          <h3> <p className='font-black inline'>Rating: </p> {avgRating}</h3>
          <p >{user.name}</p>
      </div>
      );
  };
      
  export default Card;