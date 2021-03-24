//JQuery Add&Remove&Toggle Class Özellikleri

$(function () {

    /*sınıf ekleme
    $("#btn").click(function () {
        $("#p1").addClass("blue");
    });
    */


    /*birden fazla sınıf ekleme
    $("#btn").click(function () {
        $("#p1").addClass("blue whiteText");
    });
    */


    /* sınıf sil
    $("#btn").click(function () {
        $("#p2").removeClass("red");
    });
    */


    /* yoksa ekle varsa sil
    $("#btn").click(function () {
        $("#p1").toggleClass("blue");
    });
    */


    /* özellik sil
    $("#btn").click(function () {
       $("#p2").removeAttr("class");
       $("#p2").removeAttr("id");
       $("#p2").removeAttr("href");
    });
    */


    /* css
    $("#btn").click(function () {
        var a = $("#p1").css("color");
        alert(a); //rgb(0, 0, 0)

        $("#p2").css("color", "white");
        $("#p2").css("font-size", "50px");

        $("#p3").css({
            "color" : "blue",
            "background-color" : "yellow",
            "font-size" : "50px"
        });

    });
    */


});