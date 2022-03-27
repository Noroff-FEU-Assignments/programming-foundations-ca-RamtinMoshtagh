// question 1

var outOfStock = true;

if (outOfStock = true) {
    console.log("Out of stock");
}

else {
    console.log("In stock");
}


//question 2

for (i=15; i >= 25; i++) {
    if (i === 17 || i=== 20) {
        console.log(i);
    }
}

//question 3



var games = [
    {
     title: "Grand Theft Auto",
     rating: 4.48,
    },
    {
     title: "Portal 2",
     rating: 3.5,
    },
    {
     title: "Team Fortress",
     rating: null,
    },
    {
     title: "The Witcher",
     rating: 3.0,
    },
    {
     title: "The Elder Scrolls",
     rating: 2.9,
    },
   ];


   
/*    games.forEach(function(game) {
       if(game.rating && game.rating < 3.5){
const li = document.createElement("li");
            li.appendChild(document.createTextNode(`${game.title}  ${game.rating}`));
            ul.appendChild(li);
        }
   }) */


   var ul = document.querySelector("#games");
   console.log(ul);
   

   for (var i=0; i < games.length; i++) {  
        if (games[i].rating < 3.5 && games[i].rating) {
        
            // lage en li
            const li = document.createElement("li");
            // lage en TextNode med navn på spill og rating.
            li.appendChild(document.createTextNode (games[i].title));
            li.appendChild(document.createTextNode (games[i].rating))
            // også må jeg hekte den på ul.
            ul.appendChild(li);
       }
   }


   //question 4

   //Create a function called whatIDontLike with one argument
   function whatIDontLike(thisILike) {
       //inside the function check of the argument has a string value
       //If the argument is a string value, 
       //log the message "I don't like " together with the argument.
       if (typeof thisILike === "string") {
           console.log("I dont like");
       }
   
      //If it doesn't log the message "Please send in a string".
       else {
           console.log("Please send in a string")
       }


   }

   whatIDontLike("dogs");
   whatIDontLike(1);
   whatIDontLike(true);
   whatIDontLike(null);

   //question 5

   
   //Create a function that accepts two arguments.
   function add(numb1, numb2) {
        
        //If both arguments are number values or can be converted to number values, 
        const convertedNumb1 = parseFloat(numb1);
        const convertedNumb2 = parseFloat(numb2);
        
        //If either of the arguments cannot be converted to a number, 
        if (isNaN(convertedNumb1) || isNaN(convertedNumb2)) {
            //return the value: "Invalid argument(s)"
            return "Invalid argument(s)";
        }

        //subtract the second argument from the first and return the result from the function.
         const numb3 = numb2-numb1;
         return numb3;
        
   }

//Call the function, pass in to two values
//Test your function with the following value pairs: 
//(1, 42), (200, 150), (10, "50"), ("100", "400"), 
//("Ten", "One Hundred"), (null, 123);
  const output = add(250,150);
 //and assign the return value to be the innerHTML value of the element with the id subtraction.
 document.getElementById("subtraction").innerHTML = output;




 //question 6
 //Select the button with the class page
 const changePage = document.querySelector("page");
 const buttonPage = document.querySelector("button.page");




 //Change the title of the page, 
 const heading = document.querySelector("h1");
 //(the value of the title element in the head) to "Updated title".

function changeHeading () {
     heading.innerHTML = "Updated title";
     
 }
   
//Change the background colour of the whole page to "yellow".
 function changeBackgroundColour () {
     const body = document.querySelector("body");
     body.style.backgroundColor = "yellow";
 }


 //Change the color of the h1 element to "green".
 const heading1= document.querySelector("h1");

 function changeh1Color() {
     heading1.style.backgroundColor = "green";
     
    //Change the h1 element's font to "impact".
     heading1.style.fontFamily = "impact";
     heading.innerHTML = "YourTextHere";
     
 }


//Change the value of the h1 element to be a link.


 //Remove the list style and padding from the ul element.
 const listAndPadding = document.getElementById ("games");

 function removeListAndPadding() {
    listAndPadding.style = "none";
     
 }





 buttonPage.onclick = (changeHeading,removeListAndPadding, changeBackgroundColour, changeh1Color);

 



 
//question 7 


const toys = [
    {
     name: "Lego",
     price: 15.6,
    },
    {
     name: "Master of the Universe",
     price: "28.3",
    },
    {
     name: "Barbie",
     price: null,
    },
    {
     name: "Mr Potato Head",
     price: 89.99,
    },
   ];


//When the button is clicked, 
//loop through the array below, 
//add all the prices and assign the total to 
//be the innerHTML value of the element with the id total.
toys.forEach(functio(toys) {
    if (_toys.name && toys.price) {
        const toysList = document.createElement ("price");
        toysList.appendChild.createTextNode(`${toys.name}  ${toys.price}`);

    }
})







       






   
