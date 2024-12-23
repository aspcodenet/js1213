// 0.5 Fråga vad gör ... - SPREAD OPERATOR
// const allDivs = document.querySelectorAll('div');
// console.log([...allDivs])
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// 1. Events https://www.w3schools.com/jsref/dom_obj_event.asp
// 2. Skapa  elemet - createelement vs innerHtml ioch backticks
// 3. Skapa options från Product array
// 4. dependent dropdowns
// 5. timer+ setInterval

const dateToCountdown = new Date("2024-12-24T15:00:00")

const days  = document.getElementById("days")
const hours  = document.getElementById("hours")
const minutes  = document.getElementById("minutes")
const seconds  = document.getElementById("seconds")

// hur många dagar sen är betalningen
// betaldatum - förfallodatum - 3 dagar 

function updateCountDown(){
    let now = new Date().getTime();
    let distanceInMilliSeconds = dateToCountdown - now;
    var daysLeft = Math.floor(distanceInMilliSeconds / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((distanceInMilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((distanceInMilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((distanceInMilliSeconds % (1000 * 60)) / 1000);        
    // uppdatera days, houyrs, minutes, seconds
    days.innerText = daysLeft
    hours.innerText = hoursLeft
    minutes.innerText = minutesLeft
    seconds.innerText = secondsLeft
}

// updateCounytDown ska antopas en gång i sekunden!
setInterval(updateCountDown,1000)


// constructor function
function Product(name,category){
    this.name = name
    this.category = category
}

const products=[
    new Product("Javascript for Dummies", "Böcker"),
    new Product("Javascript for Christmas Lovers", "Böcker"),
    new Product("Strumpor", "Kläder"),
    new Product("Skor", "Kläder"),
    new Product("Mössa", "Kläder"),
    new Product("Playstation 5", "Leksaker"),
    new Product("Hockeyspel Stiga", "Leksaker"),
];

const kategori = document.getElementById("kategori");
const productSelect = document.getElementById("productSelect");

function onKategoriChange(){
    productSelect.innerHTML = "" // rensa alla options


    let matchingProducts = products.filter(c=>c.category === kategori.value)
    matchingProducts.forEach(item=>{
        productSelect.innerHTML += `<option>${item.name}</option>`
    });
}


kategori.addEventListener("change", onKategoriChange)


// Alla tre kategorier - namn
//const uniqueCategories = []
// for(let i = 0; i < products.length;i++){
//     // Om products[i].category inte finns i uniqueCategories
//     // lägga in 
// }
// Where -> filter 
// Select -> map (TRANSFORM)
const uniqueCategories = [...new Set(products.map(function(item){return item.category}))];
for(let i = 0; i < uniqueCategories.length;i++){
    kategori.innerHTML += `<option>${uniqueCategories[i]}</option>`
}

onKategoriChange()

// OBJEKT
// int i = 12;

// Player:
//     name: 
//     age

//     metoder (funktioner inuti klassen)


// C# skapar objekt - 
// 1. Skapa en klass
// 2. New:a klassen och då får man ett objekt (INSTANS)


// Klass - MALL !!!! 
// Alla obj som vi skapar från samma mall -> LIKADANA
// MÅNGA!



// // // 1 OBJECT ???
// // // a) unnamed class
// let player = {
//     name: "Stefan",
//     age:52,
//     jersey:21
// };

// console.log(player);
// if(player.age === 52){
//     console.log("Du är en veteran")
// };

// let player2 = {
//     name: "Oliver",
//     age:16,
//     jersey:13
// };
// console.log(player2);


// funktion ÄRVER objekt sopm också är CALLABLE ()
// objekt är en samling med properties


// function Player(name,age,jersey){
//     this.age = age;
//     this.name = name;
//     this.jersey = jersey;
// }

// let player = new Player("Stefan",52,21);
// let player2 = new Player("Oliver",16,13);

// console.log(player);
// console.log(player2);



class Player {
    constructor(name,age,jersey,team) {
        this.age = age;
        this.name = name;
        this.jersey = jersey;
        this.team = team;
    }
}


function createTableRow(){
    let tbodyPlayers = document.getElementById("playersBody")

    let tr = document.createElement("tr")

    tr.addEventListener("click", function(){
        alert("Click")
    })
    
    let td1 = document.createElement("td")
    td1.innerText = "Hej"
    tr.appendChild(td1)
    
    let td2 = document.createElement("td")
    td2.innerText = "Hopp"
    tr.appendChild(td2)
    
    let td3 = document.createElement("td")
    td3.innerText = "Test"
    tr.appendChild(td3)
    
    let td4 = document.createElement("td")
    td4.innerText = "Whatever"
    tr.appendChild(td4)
    
    tbodyPlayers.appendChild(tr)


    let searchLabel = document.getElementById("searchLabel")
    searchLabel.style.fontSize="100px";
    
}



let player = new Player("Stefan",52,21,"Colorado");
let player2 = new Player("Oliver",16,13, "Toronto");

console.log(player);
console.log(player2);

// I VANLIGA FALL arrayen skapas via JSON API
let allPlayers = [player,player2]


// det finns ett element som har id playersBody
//



let wish = document.getElementById("wish");
wish.addEventListener("input",function(){
    if(wish.value === "hund"){
        hunden.style.display = "block";    
    }else{
        hunden.style.display = "none";    
    }
});

let hunden = document.getElementById("hunden");

let hundBtn = document.getElementById("hundBtn");
hundBtn.addEventListener("click", function(){
    hunden.style.display = "block";
});



let btn = document.getElementById("btn");
btn.addEventListener("click", createTableRow);


const lightrope = document.getElementById("lightrope");

wish.addEventListener("focus",function(){
    lightrope.style.display="block";
});
wish.addEventListener("blur",function(){
    lightrope.style.display="none";
});













// // // player.jersey = 21

// // // console.log(player)
// // // console.log(player2)

// // // let allPlayers = [player,player2,12,"2"]
// // // console.log(allPlayers)

// // // b) "new" function - Constructor function 
// // function Player(name,age){
// //     this.name = name
// //     this.age = age
// //     this.jersey = 0
// // }



// // player = new Player("Stefan",51)
// // player.jersey = 21
// // console.log(player.name)

// // player2 = new Player("Oliver",51)
// // player2.jersey = 21

// // //console.log(player)




// // document.getElementById("searchPlayer")

// // // c) class and constructor etc
// // const lista =  document.getElementsByClassName("container")
// // const lista2 =  document.getElementsByTagName("div")

// // const l3 = document.querySelectorAll("#preview table tr")

// // //testPreview.innerText = "Test"
// // testPreview.innerHTML = "Test<br />Test2"

// // //some basic selectors, VISA Dagens övningar
// // const searchPlayer =  document.getElementById("searchPlayer")
// // searchPlayer.value = "whatever"
// // searchPlayer.style.fontSize="40px"
// // searchPlayer.style.backgroundColor = "#aaa"
// // //searchPlayer.classList.add("visible")
// // //searchPlayer.classList.remove("visible")
// // console.log(searchPlayer)
// //                     // GetElementById() ==================================================
// //                     // GetElementByClassName() ===========================================
// //                     // GetElementByTagName() =============================================
// //                     // QuerySelector() - Väljer den FÖRSTA element som matchar  ==========



// // // sätta lite styles etc!                    

// // // array till table rows
// // // på två olika sätt såklart

// // // filter - när man skriver i Search så ska raderna automatiskt filtreras
// // //    tjuvstart "events" - mer imorgon

// // // (i morgon)
// // // vid klick på en rad ska vi visa ett formulär (poppa upp en modal dialog) ( = edit )

// // // om vi hinner idag?
// // // skapa options -> select

// // //egen tid = komma igång med övningarna




// // function importantList(iWant, iDontWant, iNeed, iDontNeed) {
// //      return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// // }


// function importantList({iWant,iDontWant, iNeed}) {
//     // tusen rader
//     //...
//      return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }

// // 1000 rader kod

// let wishlist = importantList({
//     iWant:'PS5',
//     iDontWant:'Kläder',
//     iNeed:'Sockor',
// })
// console.log(wishlist)


// // let o = {
// //     iWant:'PS5',
// //     iDontWant:'Kläder',
// //     iNeed:'Sockor',
// // }

// // destructure an object into separate variables
// // let iWant = o.iWant
// // let iDontWant = o.iDontWant
// // let iNeed = o.iNeed
// //let {iWant,iDontWant,iNeed} = o
// //let [a,b,c] = o

    






// // //C# objekt = instans av en viss klass - Klassen blir datatypen - 
// // // C# så kan vi skapa egna datatyper

// // // JSON - Javascript Object Notation 

// // // objekt - det är en sak med flera properties
// // let player1 = {
// //     id:12,
// //     name:"Foppa",
// //     jersey:21,
// //     team:"Colorado"
// // }

// // let player2 = {
// //     id:13,
// //     name:"Sudden",
// //     jersey:13,
// //     team:"Toronto"
// // }

// // let player3 = {
// //     id:14,
// //     name:"Zäta",
// //     jersey:40,
// //     team:"Detroit"
// // }

// // //console.log(player3.name);
// // player3.name = "Henrik Zetterberg";


// // let team = [player1,player2];
// // team.push(player3);


// // // WHERE = filter
// // let players = team.filter( p => p.jersey >= 20 );
// // console.log(players)

// // // SELECT = map
// // // select den tranformerar ett objekt till ngt annat
// // let playerName = team
// //                     .filter( p => p.jersey >= 20 )
// //                     .map( p => p.name );
// // console.log(playerName)




// // // for(let i = 0; i < team.length;i++){
// // //     let player = team[i];
// // //     console.log(player.name)
// // // }





// // // // objekt i array
// // // // map    +    filter (  LAMBDA )
// // // // select      where 


// // // let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// // // let goodCustomers = ourCustomers.slice(1,3) 

// // // console.log(goodCustomers)



// // // let myChildren = []
// // // myChildren.push("Fanny")
// // // myChildren.push("Josefine")
// // // myChildren.push("Oliver")

// // // console.log("Nu börjar det");
// // // myChildren.forEach(function(value,index,array){
// // //     console.log(value)
// // // });

// // // console.log("Nu tar vi rast");






// // // // List<int> ages = new List<int>();
// // // // ages - datastruktur - LISTA - DYNAMISK! 
// // // // dy


// // // console.log(myChildren)

// // // for(let i = 0; i < myChildren.length; i++){
// // // 	console.log(myChildren[i])
// // // }

// // // myChildren.push("Musse")
// // // console.log(myChildren)





// // // //console.log([1, 2, 3] + [4, 5, 6])

// // // // funktion kodblock som har ett namn  {  }
// // // // metod  en funktion fast inuti en klass !!!





// // // // int Calculate(int ta1, int tal2){
// // // // return tal1 + tal2;
// // // //}

// // // // C# skriva funktioner utan namn (p.Name == "Foppa"LAMDAS)
// // // // players.Where(p=>);


// // // // Function declaration synlig bara under där den skapas
// // // const showMessage = function(from, text="test") {
// // //     from = '*' + from + '*'; // make "from" look nicer
// // //     console.log( from + ': ' + text );
// // //   }

// // //   showMessage("Stefan","Foppa") ; 
// // //   showMessage("Stefan") ; 


// // // const showMessage2 = (from, text="test") => {
// // //     from = '*' + from + '*'; // make "from" look nicer
// // //     console.log( from + ': ' + text );
// // //   }


// // //  const calcArrow = (tal1, tal2) =>  tal1 + tal2;
  

  

// // // // NACKDELEN ÄR ATT DEN ÄR SYNLIG ÖVERALLT
// // // // anropbar ovanifrån
// // // // denna "hoistas" -> läggs längst upp

// // function calculate(tal1, tal2) {
// //     // if 
// //     // anropa
// //     //
// //     let result = tal1 + tal2;
// //     return result;
// //     //return tal1 + tal2;
// // }


// // let result = calculate(12,99); // 
// // // console.log(result); // 111

// // // result = calculate("12", "99")
// // // console.log(result); 










