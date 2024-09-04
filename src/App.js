import React,{lazy, Suspense,useContext, useState} from "react";
import ReactDOM from 'react-dom/client';
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
//on demand importing or lazy loading
const Instamart=lazy(()=>import("./components/Instamart"))
const About=lazy(()=>import("./components/About"))
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
const App=()=>{
    const [user,setUser]=useState({
            name:"Sanjay Saahu",
            email:"sanjaysaahu@gmail.com"
    });
      return (
        <Provider store={store}>
          <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <Outlet />
            <Footer />
          </UserContext.Provider>
        </Provider>
      );
}



const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            }, 
            {
                path:'/about',
                element:(
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About/>
                    </Suspense>
                ),
                children:[
                    {
                        path:'profile',
                        element:<Profile/>
                    }
                ],
            }, 
           { path:'/contactus',
            element:<ContactUs/>
           },
           {
                path:'/cart',
                element:<Cart/>
           },
           {
            path:'/restaurents/:resId',
            element:<RestaurentMenu/>
           },
           {
            path:'/instamart',
            element:(
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
            )
           }
        , 
        ],
        errorElement:<Error/>,
    },  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {appRouter} />);

