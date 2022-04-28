let employees = [
    {
      id: 1,
      first_name: "Suresh",
      last_name: "Kumar",
      email: "suresh@gmail.com",
      gender: "male",
      ip_address: "160.192.178.23",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      last_name: "Das",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.168.23",
    },
  
    {
      id: 3,
      first_name: "Jhansi",
      last_name: "Das",
      email: "jhansi@gmail.com",
      gender: "female",
      ip_address: "160.192.128.23",
    },
  
    {
      id: 4,
      first_name: "John",
      last_name: "Paul",
      email: "john@gmail.com",
      gender: "male",
      ip_address: "160.192.198.23",
    },
    {
      id: 5,
      first_name: "Lavish",
      last_name: "paul",
      email: "lavish@gmail.com",
      gender: "male",
      ip_address: "160.192.148.23",
    },
  
    {
      id: 6,
      first_name: "Sourav",
      last_name: "Paul",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.128.23",
    },
    {
      id: 7,
      first_name: "Sangeetha",
      last_name: "Paul",
      email: "sangeetha@gmail.com",
      gender: "female",
      ip_address: "160.193.178.23",
    },
  
    {
      id: 8,
      first_name: "Pavan",
      last_name: "Sai",
      email: "pavan@gmail.com",
      gender: "male",
      ip_address: "160.172.178.23",
    },
    {
      id: 9,
      first_name: "Pavni",
      last_name: "Das",
      email: "pavni@gmail.com",
      gender: "female",
      ip_address: "160.162.178.23",
    },
    {
      id: 10,
      first_name: "Jenny",
      last_name: "Paul",
      email: "jenny@gmail.com",
      gender: "female",
      ip_address: "160.182.178.23",
    },
  ];


  //All Employee Data 
  let allEmpButton=document.querySelector("#all-emp-btn");
  allEmpButton.addEventListener("click",function(){
    displayEmployees(employees);

  })



  //All Male EMployees if user click on Male buttton 
  let maleButton=document.querySelector("#male-emp-btn");
  maleButton.addEventListener("click",function(){
      let maleEmployee=employees.filter(function(employee){
            return employee.gender==="male";
      })
      console.table(maleEmployee)
      displayEmployees(maleEmployee);
  })


  let femaleButton=document.querySelector("#female-emp-btn");
  femaleButton.addEventListener("click",function(){
      let femaleEmployee=employees.filter(function(employee){
            return employee.gender==="female";
      })
      console.table(femaleEmployee)
      displayEmployees(femaleEmployee);
  })



  //Search Functionality Logic 

let searchBox=document.querySelector("#search-box");
searchBox.addEventListener("keydown",function(){
    let textEntered=searchBox.value;//user enter text
    console.log(textEntered);

    let filteredEmployees=[];
    if(textEntered!=""){
        //populate the data on search box 
        filteredEmployees=employees.filter(function(employee){
            return employee.first_name.toLowerCase().includes(textEntered.toLowerCase()) || employee.last_name.toLowerCase().includes(textEntered.toLowerCase())|| employee.email.toLowerCase().includes(textEntered.toLowerCase());
    })
    displayEmployees(filteredEmployees);
    }
    
})










  //Display Data to get the data if user click on the button
  let displayEmployees=(employees)=>{
      //select the table 
      let tablebody=document.querySelector("#table-body");


      //clear the table body 
      let tableRow="";
      for(let employee of employees){
          tableRow+=`
          <tr>
            <td>${employee.id}</td>
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.email}</td>
            <td>${employee.gender}</td>
            <td>${employee.ip_address}</td>
            </tr>
           
          `
          tablebody.innerHTML=tableRow;
      }



  }