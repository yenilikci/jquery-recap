// JQuery Animate

$(function () {

    /*
    $("#btn").click(function () {

        $("#div1").animate({
            left: "200px", // 200 px soldan sağa kay
            //top: "200px", // 200 px yukarıdan aşağıya kay
            //width: "400px", // genişliği 400px yap
            //height: "400px", // yüksekliği 400px yap
            //height: "+=100px", // yüksekliği 100 px artır
            height: "toggle", // slide gibi çalışır
            width: "-=20px", //genişliği 20 px düşür
            fontSize: "64px", // yazım formatına dikkat (js syntaxında css özellikleri)
            backgroundColor: "yellow" // backgroundColor ve color çalışmaz
        },3000);

    });

    */


    $("#btn").click(function () {
        $("#div1").animate({height: "500px"}, 3000);
        $("#div1").queue(function () {
            $(this).css("background-color", "yellow");
            $(this).dequeue();
        });
        $("#div1").animate({width: "500px"}, 3000);
        $("#div1").queue(function () {
            $(this).css("background-color", "green");
            $(this).dequeue();
        });
        $("#div1").animate({height: "200px"}, 3000);
        $("#div1").queue(function () {
            $(this).css("background-color", "red");
            $(this).dequeue();
        });
        $("#div1").animate({width: "200px"}, 3000);
        $("#div1").queue(function () {
            $(this).css("background-color", "gray");
            $(this).dequeue();
        });
    });


});