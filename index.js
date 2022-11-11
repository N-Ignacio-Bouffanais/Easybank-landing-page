const x = document.getElementById("close")
const y = document.getElementById("hamburguer")

function Open() {
    if (window.innerWidth <= 830) {
        x.style.display = "block";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
function Close() {
    if (window.innerWidth <= 830) {
        x.style.display = "none";
        y.style.display = "block";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
