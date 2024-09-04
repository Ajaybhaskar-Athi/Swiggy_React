//INTEGRATION TESTINg since search effect body component and it effect some other comps like restuarentMEnu
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body.js";
import store from "../../utils/store";
import { RESTAURENT_DATA } from "../../mocks/data.js";

global.fetch=jest.fn(()=>{
    Promise.resolve({
        json: Promise.resolve(RESTAURENT_DATA),//we use two promises since one is for fetch and other is to convert it into json
    })
});

test("Search Results on HomePage",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    console.log(body);
})