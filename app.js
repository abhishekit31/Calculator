let display = document.getElementById("display");

function btnclicked(value) {
    display.value += value; 
}
function clear_Display() {
    display.value = ""; 
}
function evaluate_Display() {
    try {
        if (display.value === "") 
        {
            display.value = "0";
        } 
        else 
        {
            display.value = eval(display.value);
        }
    } 
    catch (e) 
    {
        display.value = "Error";
    }
}