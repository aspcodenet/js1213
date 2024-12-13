//C# objekt = instans av en viss klass - Klassen blir datatypen - 
// C# så kan vi skapa egna datatyper

// JSON - Javascript Object Notation 

// objekt - det är en sak med flera properties
let player1 = {
    id:12,
    name:"Foppa",
    jersey:21,
    team:"Colorado"
}

let player2 = {
    id:13,
    name:"Sudden",
    jersey:13,
    team:"Toronto"
}

let player3 = {
    id:14,
    name:"Zäta",
    jersey:40,
    team:"Detroit"
}

//console.log(player3.name);
player3.name = "Henrik Zetterberg";


let team = [player1,player2];
team.push(player3);


// WHERE = filter
let players = team.filter( p => p.jersey >= 20 );
console.log(players)

// SELECT = map
// select den tranformerar ett objekt till ngt annat
let playerName = team
                    .filter( p => p.jersey >= 20 )
                    .map( p => p.name );
console.log(playerName)




// for(let i = 0; i < team.length;i++){
//     let player = team[i];
//     console.log(player.name)
// }





// // objekt i array
// // map    +    filter (  LAMBDA )
// // select      where 


// let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// let goodCustomers = ourCustomers.slice(1,3) 

// console.log(goodCustomers)



// let myChildren = []
// myChildren.push("Fanny")
// myChildren.push("Josefine")
// myChildren.push("Oliver")

// console.log("Nu börjar det");
// myChildren.forEach(function(value,index,array){
//     console.log(value)
// });

// console.log("Nu tar vi rast");






// // List<int> ages = new List<int>();
// // ages - datastruktur - LISTA - DYNAMISK! 
// // dy


// console.log(myChildren)

// for(let i = 0; i < myChildren.length; i++){
// 	console.log(myChildren[i])
// }

// myChildren.push("Musse")
// console.log(myChildren)





// //console.log([1, 2, 3] + [4, 5, 6])

// // funktion kodblock som har ett namn  {  }
// // metod  en funktion fast inuti en klass !!!





// // int Calculate(int ta1, int tal2){
// // return tal1 + tal2;
// //}

// // C# skriva funktioner utan namn (p.Name == "Foppa"LAMDAS)
// // players.Where(p=>);


// // Function declaration synlig bara under där den skapas
// const showMessage = function(from, text="test") {
//     from = '*' + from + '*'; // make "from" look nicer
//     console.log( from + ': ' + text );
//   }

//   showMessage("Stefan","Foppa") ; 
//   showMessage("Stefan") ; 


// const showMessage2 = (from, text="test") => {
//     from = '*' + from + '*'; // make "from" look nicer
//     console.log( from + ': ' + text );
//   }


//  const calcArrow = (tal1, tal2) =>  tal1 + tal2;
  

  

// // NACKDELEN ÄR ATT DEN ÄR SYNLIG ÖVERALLT
// // anropbar ovanifrån
// // denna "hoistas" -> läggs längst upp

// function calculate(tal1, tal2) {
//     // if 
//     // anropa
//     //
//     let result = tal1 + tal2;
//     return result;
//     //return tal1 + tal2;
// }


// let result = calculate(12,99); // 
// console.log(result); // 111

// result = calculate("12", "99")
// console.log(result); 






