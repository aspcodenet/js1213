const slideshow = document.getElementById("slideshow-container")

const allSlides =  slideshow.querySelectorAll("div.mySlides.fade") 
// allSlides = NodeList (en wrapper runt en array)

const prev = slideshow.querySelector(".prev")

const next = slideshow.querySelector(".next")

let activeIndex = 0
let totalCount = allSlides.length

function setActiveSlide(index){
    activeIndex = index
    for(let i = 0; i < totalCount; i++){
        if (i === index){
            allSlides[i].style.display="block";
        }else {
            allSlides[i].style.display="none";
        }
    }
}
setActiveSlide(0)


prev.addEventListener("click",function(){
    if(activeIndex === 0){
        activeIndex = totalCount - 1
    }else{
        activeIndex = activeIndex - 1 
    }
    setActiveSlide(activeIndex)
})


next.addEventListener("click",function(){
    if(activeIndex === totalCount - 1){
        activeIndex = 0
    }else{
        activeIndex = activeIndex + 1 
    }
    setActiveSlide(activeIndex)
})


// for(let i = 0;i < totalCount; i++){
//     let span = document.createElement("span")
//     span.classList.add("dot")
//     dottarna.appendChild(span)

//     span.addEventListener("click",function(){
//         console.log("aaa")
//         setActiveSlide(i)        
//     })


//     //<div class="mySlides fade">
//     let el = allSlides[i].querySelector("div.numbertext") 
//     el.textContent = (i+1) + " / " +  totalCount
// }

// setActiveSlide(0)
