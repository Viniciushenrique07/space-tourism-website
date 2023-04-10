import { dataFetching } from "./dataFetching.js"

dataFetching().then((data) => {
    const { technology } = data

    const list = document.getElementsByClassName("dot")
    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const landscape = document.querySelector(".landscape")
    const portrait = document.querySelector(".portrait")

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", () => {
            const current = document.getElementsByClassName("dot-active")

            current[0].className = current[0].className.replace(" dot-active", " dot-normal")

            list[i].classList.add("dot-active")
            list[i].classList.remove("dot-normal")

            title.innerHTML = technology[i].name
            description.innerHTML = technology[i].description
            landscape.srcset = technology[i].images.landscape
            portrait.src = technology[i].images.portrait
        })
    }
})