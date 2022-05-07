// const url="https://restcountries.com/v3.1/all"
// fetch(url)
// .then((response)=>response.json())
// .then((data)=>{
//   //Get the dat from the api
//   console.log(data[92].capital);
// })
// .catch((error)=>{
//   //If there is an error
//   console.log(error);
// });


const fetchDataBtn=document.querySelector("#fetchdata");
const result=document.querySelector("#result");


//Get the data from API and set the content of the result div
async function getData(){
  result.innerText="Loading....";
  try {
    //Fetch of data code 
    const res=await fetch("https://api.github.com/users/lavishjain36");
    const data=await res.json();
    // result.innerText=`${data.name} has ${data.public_repos} repos`;
    result.innerText=JSON.stringify(data);

    
  } catch (error) {
    //Handle error here
    result.innerText="Error";
    
  }

}

//Add a event Listener
fetchDataBtn.addEventListener("click",function(){
  getData();
});

