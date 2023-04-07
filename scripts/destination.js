import {dataFetching} from "./dataFetching.js"

dataFetching().then((data) => {
    const {destinations} = data
    const list = document.getElementsByClassName("aside-li")
    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const distance = document.querySelector(".distance")
    const time = document.querySelector(".time")
    const planetImg = document.querySelector(".planet-img")
        
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener("click", ()=>{
            let current = document.getElementsByClassName("aside-active")
            current[0].className = current[0].className.replace(" aside-active", " aside-normal")

            list[i].classList.remove("aside-normal")
            list[i].classList.add("aside-active")

            title.innerHTML = destinations[i].name
            description.innerHTML = destinations[i].description
            distance.innerHTML = destinations[i].distance
            time.innerHTML = destinations[i].travel
            planetImg.src = destinations[i].images.png
        })
    }
})

