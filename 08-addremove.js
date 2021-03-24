//JQuery Add&Remove

$(function () {

    /* append ~ prepend
    $("#btn").click(function() {

        //aynı elementte sona ekleme
        //$("#div1").append("Jq Antrenman");
        $("#div1").append("<p>Jq Antrenman</p>");

        //aynı elementte başa ekleme
        //$("#div1").prepend("Jq Antrenman");
        $("#div1").prepend("<p>Jq Antrenman</p>");

    });
    */

    /* after ~ before
    $("#btn").click(function () {

        //elementten sonra ekleme
        //$("#div1").after("Jq Antrenman");
        $("#div1").after("<p>Jq Antrenman</p>");

        //elementten önce ekleme
        //$("#div1").before("Jq Antrenman");
        $("#div1").before("<p>Jq Antrenman</p>");

    });
    */


    /* remove ~ empty
    $("#btn").click(function () {
        $("#div1").remove(); //div1 id li element silinir
        //$("div").remove("#div1");
    });

    $("#btn").click(function () {
        $("#div1").empty(); //div1 id li elementin içi silinir
    });
    */


    /* birden çok ekleme
    function yazdir() {
        var t1 = "<p>Paragraf yazıldı</p>"
        var t2 = $("<p></p>").text("P2");
        var t3 = document.createElement("p").innerHTML = "p3";
        $("#div1").append(t1,t2,t3);
        //$("#div1").prepend(t1,t2,t3);
    }
    yazdir();
    */


    /* appendTo ~ prependTo
    $("#btn").click(function () {

        $("<p>Yeni Paragraf</p>").appendTo("#div1");

        $("<p>Yeni Paragraf</p>").prependTo("#div1");

    });
    */


    /* insertAfter ~ insertBefore
    $("#btn").click(function () {

        $("<p>Yeni Paragraf</p>").insertAfter("#div1");

        $("<p id='p5'>Yeni Paragraf</p>").insertBefore("#div1");

    });
    */


    /* replaceAll ~ replaceWith
    $("#btn").click(function () {

        $("<p>Değiştirilmiş</p>").replaceAll("p");

        $("p").replaceWith("<p>Değiştirilmiş</p>");

    });
    */


    // clone
    $("#btn").click(function () {
        $("#p1").clone().appendTo("#div1");
    });


});