const a = "박경환"
let b = "정동일"
var c = "이서영"

console.log("yaho")


const h1 = document.querySelector("h1")
const title = document.getElementsByClassName("title")
const Idtitle = document.getElementById("title")
console.log(h1)
console.log(title[0].innerHTML)
console.log(title[0].textcontent)
console.log(Idtitle)
console.log(Idtitle.innerHTML)

h1.innerHTML = '정지오 바보'

h1.addEventListener("click",(e)=>{
    h1.style.color = "Red"
})

const title2 = document.createElement("h1")
title2.innerHTML = '김성미 멍청이';
document.body.append(title2)

title2.addEventListener("click",(e)=>{
    title2.classList.toggle("red")
})




const fucntionalCode = () => {
    console.log("이선재 게이")
}

fucntionalCode();