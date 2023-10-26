
$.get("/components/nav/nav.html", function (data) {
    $("header").prepend(data)
})
