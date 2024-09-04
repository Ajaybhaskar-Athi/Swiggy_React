import { useState } from "react";

// style={{backgroundColor:'#EEEDF0',
//     border:'1px solid #EEEDF0',
//     width: '200px',
//     height:'355px',
//     margin: '5px'
//   }}
const Card=()=>{
      return (
      
          <div className=" h-[175] w-[200] border bg-gray-500 m-5"  >
          </div>
      );
  };



const Shimmer=()=>{
    const [filterRestaurents,setFilterRestaurents]=useState([]);
    return (
        <>
           <div className=" h-[100]  border bg-gray-500   my-10"></div>

            <div className="cardsDiv flex flex-wrap justify-between">
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>

        </>
    )
}


export default Shimmer;