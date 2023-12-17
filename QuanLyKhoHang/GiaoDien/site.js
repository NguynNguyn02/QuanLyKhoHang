var x = document.querySelectorAll(".ti-angle-right");

var x1 = document.querySelectorAll(".ti-close");
y = document.querySelectorAll("#collapseTwo");

x[0].onclick = function() {
    x[0].classList.remove("ti-angle-right");
    x[0].classList.add("ti-angle-down");
    y[0].style.display = 'block';
    y[0].classList.add("navdown");
}

x1[0].onclick = function() {
    x[0].classList.remove("ti-angle-down");
    x[0].classList.add("ti-angle-right")
    y[0].style.display = 'none';
}

x[1].onclick = function() {
    x[1].classList.remove("ti-angle-right");
    x[1].classList.add("ti-angle-down");
    y[1].style.display = 'block';
    y[1].classList.add("navdown");
}

x1[1].onclick = function() {
    x[1].classList.remove("ti-angle-down");
    x[1].classList.add("ti-angle-right")
    y[1].style.display = 'none';
}

x[2].onclick = function() {
    x[2].classList.remove("ti-angle-right");
    x[2].classList.add("ti-angle-down");
    y[2].style.display = 'block';
    y[2].classList.add("navdown");
}

x1[2].onclick = function() {
    x[2].classList.remove("ti-angle-down");
    x[2].classList.add("ti-angle-right")
    y[2].style.display = 'none';
}

x[3].onclick = function() {
    x[3].classList.remove("ti-angle-right");
    x[3].classList.add("ti-angle-down");
    y[3].style.display = 'block';
    y[3].classList.add("navdown");
}

x1[3].onclick = function() {
    x[3].classList.remove("ti-angle-down");
    x[3].classList.add("ti-angle-right")
    y[3].style.display = 'none';
}

x[4].onclick = function() {
    x[4].classList.remove("ti-angle-right");
    x[4].classList.add("ti-angle-down");
    y[4].style.display = 'block';
    y[4].classList.add("navdown");
}


x1[4].onclick = function() {
    x[4].classList.remove("ti-angle-down");
    x[4].classList.add("ti-angle-right")
    y[4].style.display = 'none';
}

x[5].onclick = function() {
    x[5].classList.remove("ti-angle-right");
    x[5].classList.add("ti-angle-down");
    y[5].style.display = 'block';
    y[5].classList.add("navdown");
}

x1[5].onclick = function() {
    x[5].classList.remove("ti-angle-down");
    x[5].classList.add("ti-angle-right")
    y[5].style.display = 'none';
}

function showanhsp() {
    var x = document.querySelector(".anhminhhoa");
    var y = document.querySelector(".anh");
    x.onchange = (event) => {
        y.classList.remove("d-none");
        y.setAttribute('src', URL.createObjectURL(event.target.files[0]))
        console.log(URL.createObjectURL(event.target.files[0]))
    }
}
showanhsp();