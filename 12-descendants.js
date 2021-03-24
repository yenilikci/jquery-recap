//JQuery Descendants

$(function () {

    /* bir alt seviyedeki çocuklar
    $("#btn").click(function () {

        $("#div1").children().css({
            "border": "2px solid black",
            "color": "red"
        })

    });
    */


    /* bir alt seviyedeki belirli bir çocuğu seçme
    $("#btn").click(function () {

        $("#div1").children("#div3").css({
            "border": "2px solid red",
            "color": "red"
        });

    });
    */


    /* find ~ toruna erişebiliriz
    $("#btn").click(function () {

        $("#div1").find("span").css({
            "border" : "2px solid red",
            "color" : "red"
        });

    });
    */


    // find("*") ~ tüm torunlara erişim
    $("#btn").click(function () {

        $("#div1").find("*").css({
            "border": "2px solid black",
            "color": "blue"
        });

    });


});