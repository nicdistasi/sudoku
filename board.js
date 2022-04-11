var boardElem = document.getElementById('grid');

var boxElems = {};
var boardVals = {};


function getSector(x, y) {
    var xSect = (x-x%3)/3 +1;
    var ySect = (y-y%3)/3 +1;
    var sector = (xSect+(3*(ySect-1)))-1;
    return sector;
}


function loadBoard() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            var sector = getSector(x, y);
            const newBox = document.createElement('div');
            newBox.setAttribute('class', 'grid-box');
            newBox.setAttribute('id', sector+''+x+''+y);
            boardElem.appendChild(newBox);

            const newBoxElem = document.getElementById(sector+''+x+''+y);
            boxElems[sector+''+x+''+y] = newBoxElem;

            boardVals[sector+''+x+''+y] = 0;
        }
    }
    createBoard();
}

function createBoard() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            var sector = getSector(x, y);
            var elem = boxElems[sector+''+x+''+y];

            var num = Math.round((Math.random()*8))+1;
            var validNum = false;

            //while (validNum == false) {
                for (var boxElem in boxElems) {
                    var boxElemSect = boxElem.substring(0,1);
                    var boxElemX = boxElem.substring(1,2);
                    var boxElemY = boxElem.substring(2,3);
    
                    if (sector == boxElemSect || x == boxElemX || y == boxElemY) {
                        console.log(sector+''+x+''+y+' '+boxElem);
                        if (num != boardVals[boxElem]) {
                            validNum == true;
                            boardVals[sector+''+x+''+y] = num;
                        } else {
                            num = Math.round((Math.random()*8))+1;
                        }
                    }
                }
            //}

        }
    }
}

loadBoard();