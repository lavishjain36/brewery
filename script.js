//Build an html elements
document.body.innerHTML=`<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJk5ZOaUAMfsU2LG0B4x1cC4M3vEsiqQQDQ&usqp=CAU" width="250" height="50" alt="icon">
</div>
<div id="mainContainer" class="main-container"></div>
`;


//crate a function to get the data 
const  getData=async (data) =>{
  try {
    const data=await fetch("https://api.openbrewerydb.org/breweries");
    const brewerys=await data.json();
    brewerys.forEach((brewery)=>{
      console.log(brewery);
      displayData(brewery);
    })
    
  } catch (error) {
    console.log(error);
    
  }

}
getData();

const displayData=(obj)=>{
  mainContainer.innerHTML+=
  `
  <div class="container">
  <h3>Brewery Name:<span>${obj.name}</span></h3>
  <p>Breweris Type:<span>${obj.brewery_type}</span></p>
  <p>Brewery Address:<span>${obj.street}</span></p>
  <p>Brewery City:<span>${obj.city}</span></p>
  <p>Brewery State:<span>${obj.state}</span></p>
  <p>Brewery Zip:<span>${obj.postal_code}</span></p>
  <p>Brewery Phone:<span>${obj.phone}</span></p>
  <p>Brewery Website:<span>${obj.website_url}</span></p>
  </div>`;
}

