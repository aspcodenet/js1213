// MAP/FILTER/FIND i JavaScript för C#-are 





const movies = [
    { title: "The Fast and the Furious", year: 2001, rating: 4.2  },
    { title: "Fast & Furious 6", year: 2013, rating: 5.0 },
    { title: "Fast & Furious 7", year: 2015, rating: 3 },
    { title: "Fast & Furious 9", year: 2021, rating: 5 },
    ];

// LINQ    SELECT (transformerar -> varje item til en ny sak),  WHERE (filter -> ny array), FIRSTORDEFAULT (letar till första matchen)

movies.forEach(m=>{
    console.log(m.title )
})


// for(let m of movies){
//     console.log(m.title)
// }

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i].title)
// }



// WHERE  FILTER
// ta fram alla filmer som har minst 4.5 i betyg
const braMovies = movies.filter(m=>m.rating > 4.5)  
console.log(braMovies)


// SELECT MAP
// ta fram title (ska heta namn) och age (2024-year) för  alla filmer som har minst 4 i betyg
const braMovies2 = movies.map(m=>{   return { namn:m.title, age:2024-m.year }      })
console.log(braMovies2)

const braMovies3 = movies.map(m=>m.title)
console.log(braMovies3)

// FIND FirstOfDefault
const aMovie = movies.find(m=>m.year > 2030)
console.log(aMovie)





