import { useEffect } from "react";
import store from "../utils/store";
import {  useDispatch, useSelector } from "react-redux";
import { removeItem ,clearCart} from "../utils/cartSlice";

const IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const Item=({item})=>{
    const dispatch=useDispatch();

    const handleRemoveItem=(item)=>{
        // console.log(item);
            dispatch(removeItem(item.id))
    }

    return(
        <>
        <div className="item w-[720px] h-[220px] border border-dotted border-black rounded m-2.5 p-2.5 flex justify-between items-center">
            <div className="content  flex flex-col justify-center items-start">
                <h1 className="mb-1.25">{item.name}</h1>
                <p className="mt-1.25"><b> Price: </b> {item.price / 100}</p>
                <p className="mt-1.25">{item.description}</p>
                <button className="p-2 m-2 bg-red-500 rounded-full hover:text-yellow-400"
                onClick={()=>handleRemoveItem(item)}
                >Remove</button>
            </div>
           <img src={IMG + item.imageId} alt={item.name} className="h-24 w-[150px] rounded" />
            </div>
            </>
    )
}

const Cart=()=>{
const cartItems=useSelector(store=>store.cart.items);

    const dispatch=useDispatch();
const handleRemoveCart=()=>{
    dispatch(clearCart());
}

    useEffect(()=>{
        // console.log("Cart Rendered ");
    },[])
    return (
        <>
        <button className=" p-2 m-2 text-xll font-semibold bg-red-600 rounded-md hover:text-2xl" 
        onClick={()=>handleRemoveCart()}
        >Clear Cart</button>
        <div className="flex flex-col items-center">
            {cartItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
        </>
    );
}

export default Cart;