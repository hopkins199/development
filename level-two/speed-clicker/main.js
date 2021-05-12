var span = document.querySelector("span");

var clickNum = localStorage.getItem("clickNum") || 0;
span.textContent = clickNum;

window.addEventListener("click", function () {
    clickNum++;
    localStorage.setItem("clickNum", clickNum);
    span.textContent = clickNum;
})