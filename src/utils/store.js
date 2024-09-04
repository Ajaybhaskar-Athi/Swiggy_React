import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
});

export default store;


/**
 * Create a store => configureStore()-RTK
 * 
 * provide our store to app=> <provider store={store}> -import from react-redux
 * 
 * slice=>-import from RTK
    - createSlice({
                         name:"",
                         initialState: ,
                         reducers;{
                            addItem:(state,action)=>{state=action.payload}
                            }
                        
                     })
    
 * export actions => export const {addItem,removeItem}=cartSlice.actions;//actions coming from cartSlice.actions                  
 * 
 * put that slice into store
 *              -{
                    reducer:{
                    nameofSlice:imported one 
                    cart:cartSlice,
                    user:userSlice
                    }
                     } 
 *  */