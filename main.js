// Calculator 
let display = document.querySelector("#display");

function num(li){
    display.value +=li;
}
function ac(){
    display.value="";
}
function del(){
    display.value=display.value.slice(0,-1);
}
function sum(){
    display.value=eval(display.value);
}
