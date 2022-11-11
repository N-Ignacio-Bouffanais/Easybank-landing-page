const x = document.getElementById("close")
const y = document.getElementById("hamburguer")
const z = document.getElementById("nav-list")

function Open() {
    if (window.innerWidth <= 900) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "flex";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
function Close() {
    if (window.innerWidth <= 900) {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
