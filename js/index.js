$(document).ready(function () {
    
    // Make Cells
    makeCells();
});

/**
 * Make cells
 */
function makeCells() {
    // Main board
    mainBoard = $('#main-board');

    // Run loop to multiply cell
    for(var i = 1; i <= 225; i++) {
        cell = '<div class="cell" id="cell-'+i+'" draggable="true"></div>';
        mainBoard.append(cell)
    }

    $('#cell-112').append('<span class="letter">A</span><span class="point">1</span>').addClass('tile');
}