//JQuery Dimensions

$(function () {
    $("#btn").click(function () {

        //var a = $("#div1").width();
        //var b = $("#div1").height();

        //var a = $("#div1").innerWidth(); //padding+width
        //var b = $("#div1").innerHeight(); //padding+height

        //var a = $("#div1").outerWidth(); //padding+border+width
        //var b = $("#div1").outerHeight(); //padding+border+height

        var a = $("#div1").outerWidth(true); //tüm değerler
        var b = $("#div1").outerHeight(true); //tüm değerler

        $("#div2").html("Genişlik: " + a + "<br>Yükseklik: " + b);

    });
});