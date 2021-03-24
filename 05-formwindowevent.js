//JQuery Form&Window Event
$(function () {
    /*
       $("#frm").submit(function (){
            //$("#div1").css("background-color","green")
            alert("Form Kaydedildi");
       });
     */

    /*text input içerisindeki değer değişirse ; (bos bır sey olsa da degısır)
    $("#Text1").change(function (){
        $("#div1").css("background-color","green");
    })
    */

    /* inputa tıklama işlemi
        $("#Text1").focus(function (){
            $("#div1").css("background-color","green");
        });
    */

    /*  input dışında bir yere tıklama işlemi
        $("#Text1").blur(function (){
            $("#div1").css("background-color","red");
        });
    */

    /* bunlarda aynı
    $("#Text1").focusin(function (){
        $("#div1").css("background-color","green");
    });

    $("#Text1").focusout(function (){
        $("#div1").css("background-color","red");
    });
    */

    /*yazıyı seçme
    $("#Text1").select(function (){
        $("#div1").css("background-color","red");
    });
    */

    /*btn2 id li butona tıkladıgımda text1 id li element seçme işlemi triggerlansın
    $("#btn2").click(function (){
        $("#Text1").trigger("select");
    });
    */

    // ------------------------ window -------------------------

    /*
    var x = 0;
    //scroll her hareket ettiginde x degeri 1 artsın ve p1 id li element içerisine yazdırılsın
    $("#div1").scroll(function (){
        $("#p1").text(x += 1);
    });
    */

    /* sayfamızın genişlik ve yükseklik değerini p1 id li element içerisine yazdıralım
        var genislik = $(window).width();
        var yukseklik = $(window).height();
        $("#p1").text("Genişlik: " + genislik + "\nYükseklik: " + yukseklik);
    */

    //pencere her boyutlandığında genişlik ve yükseklik değerlerini p1 id li element içerisine yazdıralım
    $(window).resize(function () {
        var genislik = $(window).width();
        var yukseklik = $(window).height();
        $("#p1").text("Genişlik: " + genislik + "\nYükseklik: " + yukseklik);
    });


});