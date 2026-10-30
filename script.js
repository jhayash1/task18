const text = document.querySelector(".text");
const text1 = document.querySelector(".top h2");
const input = document.querySelector(".enter input");
const btn = document.querySelector(".enter button");

const red = document.querySelector(".box:nth-child(1)");
const green = document.querySelector(".box:nth-child(3)");
const blue = document.querySelector(".box:nth-child(2)");
const yellow = document.querySelector(".box:nth-child(4)");

function display() {
  const inputValue = input.value;
  text.innerHTML = inputValue;
  console.log(inputValue);
}
red.addEventListener("click",(()=>{
    red.style.backgroundColor = "red";
    text1.style.color = "red"
}))
blue.addEventListener("click",(()=>{
    blue.style.backgroundColor = "blue";
    text1.style.color = "blue"
}))
green.addEventListener("click",(()=>{
    green.style.backgroundColor = "green";
    text1.style.color = "green"
}))
yellow.addEventListener("click",(()=>{
    yellow.style.backgroundColor = "yellow";
    text1.style.color = "yellow"
}))
btn.addEventListener("click", display);
