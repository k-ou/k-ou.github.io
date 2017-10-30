// Brings to front the region you hover over on the map      
$(document).ready(function () {
    var svg = document.querySelector("svg");
    var paths = document.querySelectorAll("path");

    var i = paths.length;
    while (i--) {
        paths[i].addEventListener("mouseenter", function (e) {
            svg.appendChild(e.target);
        });
    }

});
