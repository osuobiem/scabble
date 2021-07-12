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
        cell = '<div class="cell" id="cell-'+i+'"></div>';
        mainBoard.append(cell)
    }
}