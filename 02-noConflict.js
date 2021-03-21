//JQuery noConflict
var jq = $.noConflict(); //burada $ işareti değil jq kullanılacak artık
jq(function () {
    jq("p").click(function () {
        jq(this).hide();
    });
})