

import { useState, useEffect } from "react";
import Shimmer2 from "./Shimmer2";
import { useParams } from "react-router-dom";
import { MENU_API_LINK } from "../constants";
import useRestaurent from "../utils/useRestaurent";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

 export const Item = (props) => {
    const items = props.card.info;
const dispatch=useDispatch();

const handleAddItem=()=>{
    dispatch(addItem(items));
}
    return (<>
        <div className="item w-[720px] h-[220px] border border-dotted border-black rounded m-2.5 p-2.5 flex justify-between items-center">
            <div className="content  flex flex-col justify-center items-start">
                <h1 className="mb-1.25">{items.name}</h1>
                <p className="mt-1.25"><b> Price: </b> {items.price / 100}</p>
                <p className="mt-1.25">{items.description}</p>
            <button className="p-2 m-2 rounded-md bg-green-500 hover:text-purple-600 hover:font-medium"
            onClick={()=>handleAddItem()}
            >Add</button>

            </div>
           <img src={IMG + items.imageId} alt={items.name} className="h-24 w-[150px] rounded" />
            </div>
            </>
    );
};






const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurent(resId);

    const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};



    return resInfo === null ? (
        <Shimmer2 />
    ) : (
        <>
            <div className="Menu flex flex-col items-center pb-8">
                <h1 id="name" className="text-pink-400">{name}</h1>
                <h3 id="cuisines" className="text-peru">{cuisines.join(",")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h3><b>Rating : </b>{avgRating}</h3>
                {/* <button className="p-2 m-2 rounded-sm text-amber-400"
                onClick={()=>handleAddItem()}
                >AddToCart</button> */}

                <h1 className="pt-5 font-medium">Recommended Dishes</h1>
            </div>

            <div className="Items flex flex-col items-center">
                {itemCards ? (
                    itemCards.map((list, index) => (
                        <Item key={index} {...list} />
                    ))
                ) : (
                    <p>No items available.</p>
                )}
            </div>
        </>
    );
};

export default RestaurentMenu;

