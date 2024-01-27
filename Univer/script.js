document.addEventListener("DOMContentLoaded", function () {
    var profileBtn = document.querySelector(".profile-btn");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    profileBtn.addEventListener("click", function () {
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (
            !profileBtn.contains(event.target) &&
            !dropdownMenu.contains(event.target)
        ) {
            dropdownMenu.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.querySelector(".side-bar");

    sidebar.addEventListener("mouseover", function () {
        sidebar.style.transition = "width 0.5s ease"; 
        sidebar.style.width = "150px";
        var textItems = document.querySelectorAll(".txt-sidebar");
        textItems.forEach(function (item) {
            item.style.display = "inline";
        });
    });

    sidebar.addEventListener("mouseout", function () {
        sidebar.style.transition = "width 0.5s ease"; 
        sidebar.style.width = "70px";
        var textItems = document.querySelectorAll(".txt-sidebar");
        textItems.forEach(function (item) {
            item.style.display = "none";
        });
    });
});
;

