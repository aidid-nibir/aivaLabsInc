$('.draggable').draggable();
$(".draggable").bind('contextmenu', function (e) {
    var id = this.id;
    $(".draggable").val(id);

    var top = e.pageY + 5;
    var left = e.pageX;

    $(".customMenu").toggle(100).css({
        top: top + "px",
        left: left + "px"
    });

    return false;
});
$(document).bind('contextmenu click', function () {
    $(".customMenu").hide();
    $(".draggable").val("");
});

$('.customMenu li').click(function () {
    $(".draggable").css({ "left": "0px", "top": "0px" });
    $(".context-menu").hide();
})