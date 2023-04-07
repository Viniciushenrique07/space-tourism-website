import {dataFetching} from "./dataFetching.js"

dataFetching().then((data) => {
    const { crew } = data
    console.log(crew)

    const list = document.getElementsByClassName("dot")

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", () =>{
            let current = document.getElementsByClassName("dot-active")

            let name = document.querySelector(".name")
            let role = document.querySelector(".role")
            let description = document.querySelector(".description")
            let crewImg = document.querySelector(".crew-img")

            current[0].className = current[0].className.replace(" dot-active", " dot-normal")
            list[i].classList.add("dot-active")
            list[i].classList.remove("dot-normal")

            name.innerHTML = crew[i].name
            role.innerHTML = crew[i].role
            description.innerHTML = crew[i].bio
            crewImg.src = crew[i].images.png

        })

        
    }
})