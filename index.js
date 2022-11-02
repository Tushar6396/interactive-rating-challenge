const main = document.querySelector(".main-container")
const thanks = document.querySelector(".thank-container")
const button = document.getElementById("submit-btn")
const rating = document.getElementById("rating")
const btn = document.querySelectorAll(".btn")

button.addEventListener("click",() => {
    thanks.style.display = "block"
    main.style.display = "none"
})

btn.forEach((btn) => {
    btn.addEventListener("click",() => {
        rating.innerHTML = btn.innerHTML
    })
})