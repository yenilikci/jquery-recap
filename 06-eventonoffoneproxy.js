//JQuery EventOn&Off&One&Proxy Özellikleri

$(function () {

    /* tek element seçimide birden fazla event
    $("#div1").on({
        //div1 id li elemente tıkladıgımda
        click: function (){
            $("#div1").css("background-color","green");
        },
        //div1 id li elementin ustune mouse ile geldigimde
        mouseenter: function (){
            $("#div1").css("background-color","red");
        },
        //div1 id li elementin üzerinden mouse ile ayrıldıgımda
        mouseleave: function (){
            $("#div1").css("background-color","black")
        }
    });
    */


    /* kullanmadığım özelliği kapatma, div1 id li elementin click özelliğini kapatma
    $("#btn").click(function (){
       $("#div1").off("click");
    });
    */


    //one kullanımında özellik 1 kez çalışır
    $("#div1").one({
        //div1 id li elemente tıkladıgımda
        click: function () {
            $("#div1").css("background-color", "green");
        },
        //div1 id li elementin ustune mouse ile geldigimde
        mouseenter: function () {
            $("#div1").css("background-color", "red");
        },
        //div1 id li elementin üzerinden mouse ile ayrıldıgımda
        mouseleave: function () {
            $("#div1").css("background-color", "black")
        }
    });


    //proxy özelliği
    var obje = {
        isim: "Melih",
        soyisim: "Çelik",
        degistir: function () {
            $("#div1").css("background-color", "green");
        }
    };
    $("#btn").click($.proxy(obje, "degistir"));

});