function fetchDataFromDatabase(){
return new Promise((resolve, reject)=>{
    const data =true;
    console.log(`Checking for the Data from the Database`);
    setTimeout(() => {
        if(data){
           resolve(`Data fetched successfully!`);
        }else{
          reject(`Data not found`);
           }
    }, 3000);
});
}
fetchDataFromDatabase()
.then(message=>{
    console.log(message);
})

.catch(error=>{
    console.log(error);
})

