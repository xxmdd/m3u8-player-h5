$(function () {
    $.get("https://v1.hitokoto.cn", null, function (a) {
        $(".intro-siteinfo").html(a.hitokoto + " —— <strong>" + a.from + "</strong>")
    }, "JSON"),
    window.onscroll = function () {
        var a = 0,
        b = 0,
        c = 0;
        document.body && (b = document.body.scrollTop),
        document.documentElement && (c = document.documentElement.scrollTop),
        a = b - c > 0 ? b : c,
        a > 0 ? $("#go-to-top").show() : $("#go-to-top").hide()
    },
    $("#go-to-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 250)
    })
}), $("footer").before('<div class="am-modal-actions-group"><a class="am-icon-btn am-icon-arrow-up am-active" id="go-to-top"></a>'),
    $(".comment").click(function () {
    $(".comment").before('<div id="lv-container" data-id="city" data-uid="MTAyMC8zMjYyNC85MTg1"></div>').text("评论区加载中...").attr("disabled", !0),
    $("#lv-container").hide(),

    (document, "script"),
    setTimeout(function () {
        $(".comment").remove(),
        $("#lv-container").show()
    }, 1e3)
});
