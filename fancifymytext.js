function alertFunc() {
    document.getElementById("text").style.fontSize = "24px";
}

function fancyFunc() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}
function boringFunc() {
    document.getElementById("text").style.fontWeight = "normal";
}
function mooFunc() {
    var str = ("text");
    var parts = str.split(" ");
    str = parts.join("-Moo");
    return str;
}