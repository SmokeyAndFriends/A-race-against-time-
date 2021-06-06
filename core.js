window.onload = DOM()

var year = -500000;
var bcad = "BC";

function DOM() {
    const c = document.getElementById("#clicker");
    const l = document.getElementById("#label");
}

function click() {
    year += 1;
    if (year >= 1) {
        bcad = "AD";
    }
    if (year <= 1) {
        bcad = "BC";
    }
    l.innerHTML = "Year: " + Math.abs(year) + bcad;
}
if (c) {
    c.addEventListener("click", click());
}