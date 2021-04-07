var btnHome1 = document.getElementById('btnHome1');
var btnHome_items = document.getElementById('btnHome_items');
var btn = 0;
btnHome1.onclick = function () {
    // alert('123');
    if (btn == 0) {
        btnHome_items.style.display = "block";
        btn = 1;
    } else {
        btnHome_items.style.display = "none";
        btn = 0;
    }
}
var btnHome2 = document.getElementById('btnHome2');
var btnHome_items1 = document.getElementById('btnHome_items1');
var btn1 = 0;
btnHome2.onclick = function () {
    // alert('123');
    if (btn1 == 0) {
        btnHome_items1.style.display = "block";
        btn1 = 1;
    } else {
        btnHome_items1.style.display = "none";
        btn1 = 0;
    }
}