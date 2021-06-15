// var btnHome1 = document.getElementById('btnHome1');
// var btnHome_items = document.getElementById('btnHome_items');
// var btn = 0;
// btnHome1.onclick = function () {
//     // alert('123');
//     if (btn == 0) {
//         btnHome_items.style.display = "block";
//         btn = 1;
//     } else {
//         btnHome_items.style.display = "none";
//         btn = 0;
//     }
// }
// var btnHome2 = document.getElementById('btnHome2');
// var btnHome_items1 = document.getElementById('btnHome_items1');
// var btn1 = 0;
// btnHome2.onclick = function () {
//     // alert('123');
//     if (btn1 == 0) {
//         btnHome_items1.style.display = "block";
//         btn1 = 1;
//     } else {
//         btnHome_items1.style.display = "none";
//         btn1 = 0;
//     }
// }

// --imgGrayScale

// var picture = document.getElementsByClassName('grayscale')
// for(let perPicture of picture){
//     perPicture.addEventListener("click", function() {
//         if($(".grayscale").hasClass('grayscaleAct')){
//             perPicture.classList.remove('grayscaleAct')
//             console.log(perPicture);

//         }
        
//         perPicture.classList.add('grayscaleAct')
//     });
// }

$(".grayscale").click(function (event) { 
    $(".grayscale").removeClass('grayscaleAct');
    $(this).addClass('grayscaleAct');
});

$(".cellPhonePic").click(function (event) { 
    $(".cellPhonePic").removeClass('w3-border-yellow');
    $(".cellPhonePic").removeClass('bgc-header-color');
    $(".cellPhonePic").addClass('w3-border-deep-purple');
    $(".cellPhonePic").addClass('bg-theme');
    $(this).addClass('w3-border-yellow');
    $(this).addClass('bgc-header-color');
    $(this).removeClass('bg-theme');
});