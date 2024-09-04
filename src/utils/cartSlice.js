import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            console.log("In Remove items function");
            const indexToRemove = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(indexToRemove, 1);
        },
        clearCart:(state)=>{
            let ip=prompt("Are You Sure you Want to Empty the cart ?(y/n)");
           if(ip=='y') state.items=[];
        }
    }
});
export const {addItem,removeItem,clearCart}=cartSlice.actions;//export actions

export default cartSlice.reducer;//export reducers : this is reducer(not reducers) it combines all above reducers and send it 


/**cartSlice contains
 * actions:{
            addItem,
            removeItem,
            clearCart    
            },
* reducer:reducers
 */