$(function () {
    console.log("NAV ready!");
    let menu = [
        {
            "url": "home.html",
            "title": "Home"
        },
        {
            "url": "menu.html",
            "title": "Menu"
        },

        {
            "url": "aboutUs.html",
            "title": "About Us"
        },
        {
            "url": "ourTeam.html",
            "title": "Our Team"
        },
    ]

    $.each(menu, function (key, nav) {
        console.log(nav.title)
        $("#navigation").append(`<li class="nav-item">
       <a class="nav-link" href="${nav.url}">${nav.title}</a>
                </li>`);
        $("#navigation").append(``);
    });
});