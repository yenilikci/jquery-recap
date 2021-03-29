// JQuery Callback Functions

$(function () {

    /*
    $("#btn").click(function () {

        $("#div1").hide(2000, function () {
            alert("Gizleme işlemi bitti");
        });

    });
    */

    $("#btn").click(function () {

        $("#div1").hide(2000, function () {

            $(this).show(2000, function () {

                $(this).fadeOut(2000, function () {

                    $(this).fadeIn(2000, function () {

                        $(this).slideUp(2000, function () {
                            $(this).slideDown(2000);
                        });

                    });

                });

            });

        });

    });


})