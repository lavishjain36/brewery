// setTimeout(() => {
//   console.log('I will execute after 5000 millisecon')
// }, 5000);

// 1s=1000ms
// function displayData(){
//   console.log("I will execute after 3000 ms")
// }


// let setTimer=setTimeout(displayData,3000)

// i want to cancel SetTimeout 





// setTimeout ->web api function that execute your code only for once delay time is over

let i=0;
let fruits=["papaya","Mangoes","Oranges","Pinapple","Grapes"]

function displayFruit(){
  console.log(fruits[i])
  i++;
}


let setTimer =setInterval(displayFruit,3000)


setTimeout(() => {
  clearInterval(setTimer)
}, 4000);


setInterval(() => {

  
}, interval);


setTimeout(() => {
  
}, timeout);

setInterval(fun,timeout)


Hello .This is a  new change