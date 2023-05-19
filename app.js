

$(() => {
	$("#container")
    let $h1 = $("<h1></h1>").text("Hogwarts")
    $("body").append($h1)
    let $h2 = $("<h2>Ronard Nyongkah</h2>")
    let $h3 = $("<h3>Slytherin</h3>")
    let $h4 = $("<h4>AntMan</h4>").attr("class","dog")
    let $wand = $("<h4>Ronard's wand is wandith</h4>")
    $("body").append($h2)
    $("body").append($h3)
    $("body").append($h4)
    $("body").append($wand)
});


