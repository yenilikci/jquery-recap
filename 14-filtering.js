// JQuery Filtering

$(function () {

    /* first ~ ilk element
    $("#btn").click(function () {
        $("div").first().css({
            "border": "2px solid green",
            "color": "blue"
        });
    });
    */


    /* last ~ son element
    $("#btn").click(function () {
        $("div").last().css({
            "border": "2px solid green",
            "color": "blue"
        });
    });
    */

    /* eq ~ indeks numarası ile belirtiriz
    $("#btn").click(function () {
        $("div").eq(0).css({
            "border": "2px solid green",
            "color": "blue"
        });
    });
    */

    // filter ~ parametreye göre filtreleme yapar
    $("#btn").click(function () {
        $("div").filter(".c2").css({
            "border": "2px solid green",
            "color": "blue"
        });
    });

    // not ~ parametreye göre filtreler - olmayanlar
    $("#btn").click(function () {
        $("div").not(".c1").css({
            "border": "2px solid green",
            "color": "blue"
        });
    });

});