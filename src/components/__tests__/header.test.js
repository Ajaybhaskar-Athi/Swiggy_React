import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

//UNIT TESTING

test("logo should load on rendering header",()=>{

    //load header 
   const header= render(
    <StaticRouter>
   <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>);
    console.log(header);

    //check if logo is loaded or not
    const logo=header.getAllByTestId("logo");
    
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");

 

})




test("online status  should be  tick mark on rendering header",()=>{

    //load header 
   const header= render(
    <StaticRouter>
   <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>);
    console.log(header);



    //check if online or not
    const isOnline=header.getByTestId("isOnline");
    expect(isOnline.innerHTML.trim()).toBe("✔");
})





test("cart   should Have  0 items on rendering header",()=>{

    //load header 
   const header= render(
    <StaticRouter>
   <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>);
    console.log(header);



    //check if online or not
    const items=header.getByTestId("items");
    expect(items.innerHTML.trim()).toBe("<a href=\"/cart\">Cart- 0 items</a>");
})


