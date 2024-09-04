import React from "react";
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", { id: 'title1' ,key:'h1'}, "Good Morning");
const heading2 = React.createElement("h1", { id: 'title2',key:'h2' }, "Ajay Bhaskar");
const container = React.createElement("div", { id: 'container' }, [heading1, heading2]);


console.log('Working');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);


/*
JSX

    const container=(
        <div id="container">
            <h1 id="title1" key ='h1'>Hello Ajay</h1>
            <img src="https://th.bing.com/th/id/OIP.64mZdkdnOhwMqLywL_x39gHaLI?rs=1&pid=ImgDetMain" />
        </div>
    );

    */



    # PASSING  propertires to functions 

    
    const Card=(props)=>{
        const data=props;
          console.log(props);
          return (
              <div className="card">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.list.info.cloudinaryImageId} ></img>
              {console.log(data.list.info.cloudinaryImageId)}
              <h3>{data.list.info.name}</h3>
              <p>{data.list.info.cuisines}</p>
              <h3>{data.list.info.avgRating}</h3>
          </div>
          );
      };
          
          
  
  const Body=()=>{
      return(
             <div className="cardsDiv">
             
              <Card />
            
                 <Card list={List[0]}/> 
                 <Card list={List[1]}/>
                 <Card list={List[2]}/>
                 <Card list={List[3]}/>
                 <Card list={List[4]}/>
                 <Card list={List[5]}/>
  
                 {/* <Card name="KFC" cuisine="Chicken,North Indian" rating="4.0 stars"
                  img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/87d7877e4ca8634bcf01b01ca4445061"
                 />  */}
              
                  </div>
      );
  };


  # PAssing Array  with spread operator 

  const body=()=>{
    return(
           <div className="cardsDiv">
            <Card {...List[0].info}/>
            <Card {...List[1].info}/>
            <Card {...List[2].info}/>
            <Card {...List[3].info}/>
            <Card {...List[4].info}/>
            <Card {...List[5].info}/>
            </div>
   );
};
            

