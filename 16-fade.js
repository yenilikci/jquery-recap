// JQuery Fade

$(function () {

    $("#btn1").click(function () {
        //$("#div1").fadeOut();
        //$("#div2").fadeOut();
        //$("#div3").fadeOut();
        //$("#div1").fadeOut(1500);
        $("#div1").delay(2000).fadeOut(1500); // 2sn bekle sonra 1.5 sn
        $("#div2").fadeOut(3000);
        $("#div3").fadeOut(4500);
    });

    $("#btn2").click(function () {
        $("#div1").fadeIn(1500);
        $("#div2").fadeIn(3000);
        $("#div3").fadeIn(4500);
    });

    $("#btn3").click(function () {
        $("#div1").fadeToggle(1500);
        $("#div2").fadeToggle(3000);
        $("#div3").fadeToggle(4500);
    });

    $("#btn4").click(function () {
        $("#div1").fadeTo(1500, 0.2); // ms,opaklık
        $("#div2").fadeTo(3000, 0.4);
        $("#div3").fadeTo(4500, 0.6);
    });

});