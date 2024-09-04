export function filterData(searchTxt,allRestaurents){
    console.log(searchTxt);
    console.log(allRestaurents);
    const data=allRestaurents.filter((restaurant)=>restaurant?.info?.name.toLowerCase().includes(searchTxt.toLowerCase()));
    console.log(data);
    return data;
}

