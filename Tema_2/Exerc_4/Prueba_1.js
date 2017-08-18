window.onload = function() {

    var header = document.querySelector("header");
    header.addEventListener("click", function(e) {
        console.log("has clickado en" + e.target.nodeName);
//           e.stopPropagation();

    });
}