let moon = document.getElementById("moon")
let stars = document.getElementById("stars")
let mountains = document.getElementById("mountains_behind")
let mountainsF = document.getElementById("mountains_front")
let text = document.getElementById("text")
let button = document.getElementById("explore")
window.addEventListener("scroll", () => {
  let value = window.scrollY

  moon.style.top = value * 1.05 + "px"
  stars.style.left = value * 0.25 + "px"
  mountains.style.top = value * 0.5 + "px"
  mountainsF.style.top = value + "px"
  text.style.marginRight = value * 3 + "px"
  text.style.marginTop = value * 1.5 + "px"
  button.style.marginTop = value * 1.5 + "px"

  console.log({ value })
})
