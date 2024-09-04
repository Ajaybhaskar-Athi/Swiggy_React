import React ,{useContext} from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";
// const About=()=>{
//     return (
//         <div>
//             <h1>This Is About Page</h1>
//             <h2>Our Team Members Welcomes You</h2>
//         </div>
//     );
// };


class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name:"ajay"
        };
        console.log(' parent-constructor');
    }
    componentDidMount(){
      
        console.log("parent componentDidMount");
    }
   
    render(){
           { console.log(" parent-render")}
        return(
            <div>
                    <UserContext.Consumer>
                        {({user})=><h1 className="text-3xl">{user.name}-{user.email}</h1>}
                    </UserContext.Consumer>
                    
                <h1>Hai This is {this.state.name}</h1>
                <button onClick={()=>{
                    this.setState({
                        name:"Akshaya"
                    });
                }}>Click To Change Name</button>

                <Profile name={"Pranav"}/>

                <Outlet/>
            </div>
        )
    }
}

export default About;