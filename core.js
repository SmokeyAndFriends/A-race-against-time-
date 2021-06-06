const c = document.getElementById("#clicker");
const l = document.getElementById("#label");

var year = -500000;
var bcad = "bc";

c.addEventListener("click", function() {
    year += 1
    if (year >= 1) {
        bcad = "AD"
    } else(year <= 1); {
        bcad = "bc"
    }
    l.innerHTML = "Year: " + year + bcad
});