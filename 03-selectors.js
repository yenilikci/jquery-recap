//JQuery Selectors (Seçiciler)

$(function () {
    //document.getElementById("btn")
    $("#btn").click(function () {
        //$("p").css("color","red");
        // $(this).css("color","red");
        //$("*").css("color","red");
        //$("p.c1").css("color","red");
        //$("#p2.c1").css("color","red");
        //$("p:first").css("color","red");
        //$("p:last").css("color","red");
        //$("ul").css("color","red");
        //$("ul li:first").css("color","red");
        //$("ul li:first-child").css("color","red");
        //$("ul li:last").css("color","red");
        //$("ul li:last-child").css("color","red");
        //$("[href]").css("color","red"); //href attribute'una sahip olan elementler
        //$("[class]").css("color","red"); //class attribute'una sahip olan elementler
        //$("a[target = '_blank']").css("color","red"); //target'ı _blank olanlar
        //$("a[target != '_self']").css("color","red"); //target'ı _self olmayanlar
        //$(":button").css("color","red"); //bütün butonlar kırmızı
        //$(":checked").css("width","100px"); //checked olan inputların genişliği 100px olacak
        //$("p:contains(ID)").css("color","red"); //p elementi içinde ID yazısı içerenler
        //$("p:not(#p1)").css("color","red"); //p1 id'si içermeyen p elementleri
        //$("p:not(':contains(ID)')").css("color","red"); //p elementi içinde ID yazısı içermeyenler
        //$("div:has(p)").css("color","red"); //içerisinde p elementi bulunan div elementleri
        //$(".c1,#p4,ul").css("color","red"); //c1 sınıfına sahip olanlar , p4 id sine sahip olanlar , ul'lerim kırmızı olur
        //$("th").css("color","red");
        //$("td").css("color","red");
        $("tr:even").css("color", "red"); //indeksi çift sayı değerli elementler
        $("tr:odd").css("color", "red"); //indeksi tek değer olan elementler
    });
});