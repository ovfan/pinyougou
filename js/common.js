$(function () {
    // 鼠标经过
    $(".dropdown-layer>li").mouseover(function () {
        $(this).children("ul").show();
    })
    //鼠标离开
    $(".dropdown-layer>li").mouseout(function () {
        $(this).children("ul").hide();
    })
})