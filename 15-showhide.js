//JQuery Show&Hide

$(function () {

    $("#btn2").click(function () {
        //$("#div1").hide("slow");
        //$("#div2").hide("fast");
        $("#div1").hide(3000); // 3sn
        $("#div2").hide(6000); // 6sn
        $("#div3").hide(9000); // 9sn
    });

    $("#btn1").click(function () {
        $("#div1").show(3000); // 3sn
        $("#div2").show(6000); // 6sn
        $("#div3").show(9000); // 9sn
    });

    $("#btn3").click(function () {
        $("#div1").toggle(3000);
        $("#div2").toggle(6000);
        $("#div3").toggle(9000);
    });


});