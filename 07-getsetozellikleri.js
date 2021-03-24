//JQuery Get&Set Özellikleri

$(function () {

    /*
    $("#btn").click(function () {
        var a = $("#p1").text(); //sadece txt değeri
        alert(a);
    });
    */

    /*
    $("#btn").click(function (){
        var a = $("#p2").html(); //html kodları ile birlikte txt
        alert(a)
    });
    */

    /* input içerisindeki değeri alma
    $("#btn").click(function (){
       var a = $("#t1").val();
       alert(a)
    });
    */

    /* attribute alma
    $("#btn").click(function () {
        //var a = $("#a1").attr("href");
        //var a = $("#a1").attr("target");
        var a = $("#a1").attr("class");
        alert(a);
    });
    */

    /*text set etme
    $("#btn").click(function (){
       $("#p1").text("Jquery");
    });
    */

    /*html set etme
    $("#btn").click(function () {
        $("#p1").html("<b>Jquery</b>");
    });
    */

    /*input set etme
    $("#btn").click(function (){
        $("#t1").val("<b>Jquery</b>");
    });
    */

    //attribute set etme
    $("#btn").click(function () {
        //$("#a1").attr("href","yeni.html");
        $("#a1").attr({
            "href": "yeni.html",
            "target": "_self"
        });
    });


});