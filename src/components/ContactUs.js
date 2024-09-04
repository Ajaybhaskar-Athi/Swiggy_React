import { useEffect } from "react";

const ContactUs=()=>{

    useEffect(()=>{
        console.log("UseEffect Called After Render")
        return()=>{
            console.log("useEffecr Recturn Called Before Leaving The Component Just Like componentWillUnmount Lifcycle");
           }
    },[]);
    console.log("render");

    return (
        <div>
            <h1>This Is Contact Us Page</h1>
            <h2>Our Team Members Welcomes You</h2>
        </div>
    );
};

export default ContactUs;