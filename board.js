var boardElem = document.getElementById('grid');

var boxElems = {};

function loadBoard() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            const newBox = document.createElement('div');
            newBox.setAttribute('class', 'grid-box');
            newBox.setAttribute('id', x+''+y);
            boardElem.appendChild(newBox);

            const newBoxElem = document.getElementById(x+''+y);
            boxElems[x+''+y] = newBoxElem;
            var xSect = (x-x%3)/3 +1;
            var ySect = (y-y%3)/3 +1;
            var sector = xSect*ySect;
            console.log(newBoxElem);
            console.log(sector);
            //console.log((y-y%3)/3+" "+(x-x%3)/3);
        }
    }
}

function createBoard() {



}

loadBoard();