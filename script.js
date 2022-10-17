document.getElementById('demo').innerHTML='new text';
document.getElementById('demo').id = "demo2"
document.getElementById('demo2').style.color = "red";
document.getElementById('demo2').outerHTML = "<button> something to press </button>"


function myFun(){
    alert("WARNING")
}
myFun();

function darkMode(){
    document.getElementById("pagestyle").setAttribute("href", "./styleDark.css")
}

var a = 10;
let b = 20;
const c = 30; //cant be changed

var a = 20;

console.log(a+b+c)