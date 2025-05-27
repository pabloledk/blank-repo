let length;
let width;
function calculateArea(){
    //isFloat() es parseFloat()
    length = isFloat(document.getElementById("length").value);
    width = isFloat(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("result").innerText = `The area of the rentagle is ${area}.`;
}