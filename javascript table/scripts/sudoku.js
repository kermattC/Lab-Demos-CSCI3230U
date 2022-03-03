function thingHandler() {
    // console.log("Made it here");
    console.log($(this));
}

// this will return true if the number exists in the same block
// will return false otherwise
function sameBlock(x1, y1, x2, y2) {
    let firstRow = Math.floor(y1 / 3) * 3;
    let firstCol = Math.floor(x1 / 3) * 3; 
    return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
 }
 
 function sameRow(x1, y1, x2, y2) {
    return y1 == y2;
 }
 
 function sameColumn(x1, y1, x2, y2) {
    return x1 == x2;
 }


$(document).ready(function() {
    let board2 = $("#board2");

    // let thing = $('<a>');
    // thing.text("asdf");
    // thing.attr("id", "thingy");
    // thing.click(thingHandler);

    // board2.append(thing);

    for (col = 0; col < 5; col++){
        let firstThing = $('<a>');
        firstThing.text("a");
        board2.append(firstThing);
        for (row = 0; row < 5; row++){
            let secondThing = $('<a>');
            secondThing.attr("id", '' + col + row);
            secondThing.click(thingHandler);
            secondThing.text("yyy");
            board2.append(secondThing);
        }
        let newLine = $('<br>');
        board2.append(newLine);
    }
});
