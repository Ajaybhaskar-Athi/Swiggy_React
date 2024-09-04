import {Component} from "react";

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
              location:"Dummy Location"
            },
          };
        console.log("child constructor");
    }
       async componentDidMount(){
         
            const data=await fetch("https://api.github.com/users/AjayBhaskar-Athi"); //gitbug get users API
            const json=await data.json();
            // console.log(json);
                this.setState({
                    userInfo:json
                })
           console.log("Child componentDidMount");
        this.timer=   setInterval(()=>{
            console.log('Hello World');
           },1000)
        }
        componentDidUpdate(){
            console.log("component did update");
        }
        componentWillUnmount(){
                clearInterval(this.timer);
                console.log("componentWillUnmount");
        }

    render(){
        console.log('Child Render');        
        const {count,count2}=this.state;
        return(
            <div> 
                    <h1>This is Profile Component</h1>
                    <img src={this.state.userInfo.avatar_url} alt="" />
                    <h2>Name: {this.state.userInfo.name}</h2>
                    <h2>Location: {this.state.userInfo.location}</h2>
            </div>
        )
    }
}


export default Profile;