//JQuery Ancestor

$(function () {

    /* parent - bir üst ebeveyn
    $("#btn").click(function (){

        $("span").parent().css({
           "border" : "2px solid red",
           "color" : "red"
        });

    });
    */


    /* parents - ebeveynler
    $("#btn").click(function () {

       // tüm üst ebeveynler
       $("span").parents().css({
          "border" : "2px solid black",
           "color" : "red"
       });

        // üst ebeveyn ~ ul
        $("span").parents("ul").css({
            "border": "2px solid black",
            "color": "red"
        });

    });
    */


    // parentsUntil ~ verilen elemente kadar olan elementler
    $("#btn").click(function () {

        $("span").parentsUntil("#div2").css({
            "border": "2px solid red",
            "color": "red"
        });

    });

});