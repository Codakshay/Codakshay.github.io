$(document).ready(function() {
//All of jquery code

//cool stuff
// mouseenter,hover or mouseleave - mouse hovers
//dbl - double click
//fadeToggle(speed) - faded

    $("button").click( function() {
        $("#p").toggle();   // the hashtag lets you use with an id and dots for classes and square bracks for elenebts like href
        let div = $("div");
        //div.animate({},)
    }
    );

}
);


document.getElementById('demo').innerHTML='new text';
// document.getElementById('demo').id = "demo2"
document.getElementById('demo').style.color = "red";
// document.getElementById('demo').outerHTML = "<button> something to press </button>"


function myFun(){
    alert("WARNING")
}


function darkMode(){
    document.getElementById("pagestyle").setAttribute("href", "./styleDark.css")
}

var a = 10;
let b = 20;
const c = 30; //cant be changed

var a = 20;

console.log(a+b+c)

function key_pressed(input) {
    console.log(input);
    document.getElementById("keypressed_text").innerHTML = input;
}

const key = function keyEvent(e) {

    key_pressed();
    if(e.key === "f"){
        alert("f key pressed");

    }


}

document.addEventListener("keypress", key);