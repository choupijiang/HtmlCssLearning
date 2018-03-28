// var x = prompt("Where does the pope live?")
// if (x == "Vatican") {
//     alert("Correct!")
// }

function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. " +
        "They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. " +
        "The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches " +
        "for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function makeInvisible() {
    document.getElementById("fruit").className="hidden"
}

function doubleSize() {
    var ps = document.getElementsByTagName('p')
    for (var i = 0; i< ps.length; i++){
        ps[i].style.fontSize = "2em";
        ps[i].style.color="blue";
    }
}