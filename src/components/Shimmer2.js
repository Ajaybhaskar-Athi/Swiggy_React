
const Card = () => {
  return (
    <div className="item" style={{
      width: "700px",
      height: "150px",
      border: "1px dotted #EEEDF0",
      borderRadius: "5px",
      margin: "10px 0", 
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#EEEDF0"
    }}>
    </div>
  );
};

const Shimmer2 = () => {
  return (

    <>
    <div style={{
      height: "200px",
      width: "300px",
      backgroundColor: "#EEEDF0",
      display: "flex",
      marginTop: "30px",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      marginLeft:"40%"
    }}></div>

    <div className="shimmer-container" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center items horizontally
      justifyContent: "center", // Center items vertically
      height: "100vh" // Make sure the container takes the full height of the viewport
    }}>
      <Card />      
      <Card />      
      <Card />      
      <Card />      
      <Card />      
    </div>

    </>
  );
};

export default Shimmer2;
