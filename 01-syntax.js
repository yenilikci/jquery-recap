//sayfa yüklendiğinde şu fonksiyonu çalıştır
/*
$(document).ready(function (){
    //...
});
*/

//veya
$(function (){
    $("p").click(function (){
        $(this).hide();
    });
});

//js ile
var a = document.querySelectorAll("p");
a[0].onclick = function (){
    a[0].style.display = "none";
}
a[1].onclick = function (){
    a[1].style.display = "none";
}
a[2].onclick = function (){
    a[2].style.display = "none";
}
a[3].onclick = function (){
    a[3].style.display = "none";
}
