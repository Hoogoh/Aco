   
var num = 0;
var change = 1;

window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Lotion";
}

var cookie = document.getElementById("button");


function buttonClick() { 
    num += change;

    var numbers = document.getElementById("numbers");
    
    
    numbers.innerHTML = num;      

  alert1()

    numbers.innerHTML = num;
    if(num >=25) {
        document.getElementById("1").removeAttribute("disabled"); 
    }
    if (num >=150) {
        document.getElementById("2").removeAttribute("disabled");
    }
    if (num >=770) {
        document.getElementById("3").removeAttribute("disabled");
    }
}

function buttonsClick() {
    if(num >= 25) {
        change=2;
        num -=25; 
    }
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
    upgradeLevel.innerHTML = "lool";
}
function buttoneClick() {
    if(num >= 150) {
        change=4;
        num -=150; 
    }
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
    upgradeLevel.innerHTML = "loool";
}
function alert1() {
    if (num == 10) {
        alert("coupon");

    }    
    document.getElementById("alert").innerHTML = text;
}

