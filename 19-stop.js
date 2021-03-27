// JQuery Stop

$(function () {

    $("#btn1").click(function () {
        $("#div1").hide(4000);
    });

    $("#btn2").click(function () {
        $("#div1").stop();
    });

});