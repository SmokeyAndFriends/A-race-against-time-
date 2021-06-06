window.onload = DOM()

var year = -500000;
var bcad = "BC";

function DOM() {
    const c = document.getElementById("#c");
    const l = document.getElementById("#l");
};

if (c) {
    c.addEventListener("click", function() {
        year += 1;
        if (year >= 1) {
            bcad = "AD";
        }
        if (year <= 1) {
            bcad = "BC";
        }
        l.innerHTML = "Year: " + Math.abs(year) + bcad;
    });
};