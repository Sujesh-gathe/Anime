let valueDisplays = document.querySelectorAll(".num");
let interval = 500;

valueDisplays.forEach((valueDisplay) =>{
    let startvalue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
    let duratoin = Math.floor(interval/ endvalue);
    let counter = setInterval(function () {
        startvalue = startvalue+1;
        valueDisplay.textContent = startvalue; 
    });
});