// JQuery Siblings

$(function () {

    /* kardeşler
    $("#btn").click(function () {
        $("#div2").siblings().css({
            "border" : "2px solid red",
            "color" : "red"
        });
    });
    */


    /* belirli bir kardeşi seçme
    $("#btn").click(function () {
        //2 adet h1 elementi varsa ikisinide seçer
        $("#div2").siblings("h1").css({
            "border" : "2px solid blue",
            "color" : "blue"
        });
    });
    */


    /* next ~ den sonraki elementi seçer
    $("#btn").click(function () {
        $("#div2").next().css({
            "border" : "2px solid red",
            "color": "blue"
        });
    });
    */


    /* nextAll ~ den sonraki bütün elementleri seçer
    $("#btn").click(function () {
        $("#div2").nextAll().css({
            "border" : "2px solid black",
            "color" : "red"
        });
    });
    */


    /* nextUntil ~ e kadar elementleri seçer
    $("#btn").click(function () {
        $("#div2").nextUntil("h1").css({
            "border" : "2px solid black",
            "color" : "red"
        });
    });
    */


    /* prev ~ den önceki elementi seçer
      $("#btn").click(function () {
          $("h1").prev().css({
              "border" : "2px solid red",
              "color": "blue"
          });
      });
    */


    /* prevAll ~ den önceki bütün elementleri seçer
    $("#btn").click(function () {
        $("h1").prevAll().css({
            "border" : "2px solid black",
            "color" : "red"
        });
    });
    */


    // prevUntil ~ e kadar elementleri seçer
    $("#btn").click(function () {
        $("h1").prevUntil("#div2").css({
            "border" : "2px solid black",
            "color" : "red"
        });
    });


});