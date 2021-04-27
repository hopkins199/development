var box = document.getElementById("box")
document.getElementById("box").addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
})
document.getElementById("box").addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})
document.getElementById("box").addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})
document.getElementById("box").addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})
document.getElementById("box").addEventListener("wheel", function(){
    console.log("hello")
    box.style.backgroundColor = "orange"
})
document.addEventListener("keydown", function(e) {
    console.log(e.code)
    if(e.code === "KeyB"){
        box.style.backgroundColor = "blue"
    }
    else if(e.code === "KeyR"){
        box.style.backgroundColor = "red"
    }
    else if(e.code === "KeyY"){
        box.style.backgroundColor = "yellow"
    }
    else if(e.code === "KeyG"){
        box.style.backgroundColor = "green"
    }
    else if(e.code === "KeyO"){
        box.style.backgroundColor = "orange"
    }
})
