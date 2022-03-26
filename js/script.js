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
