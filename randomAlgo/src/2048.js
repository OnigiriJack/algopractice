function combineLeft(strippedArray) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (let i = 1; i < strippedArray.length; i++) {
            if (strippedArray[i - 1] === strippedArray[i]) {
                strippedArray[i - 1] = strippedArray[i] * 2;
                strippedArray[i] = 0;
            }
        }
        // Strip dead spots
        strippedArray = strippedArray.filter(n => n !== 0);
    }
    // add in zeros from the right
    while (strippedArray.length < 4) {
        strippedArray.push(0);
    }
    //return proccessed row
    return strippedArray
}

exports.swipeLeft = (board) => {
    let newBoard = [];
    board.map(row => {
        //remove zeroes 
        let zerosStrippedArray = row.filter(num => num !== 0);
        //push processed row into result board 
        newBoard.push(combineLeft(zerosStrippedArray));
    });
    return newBoard;
}


exports.kennyLeft =
    function solve(map) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] !== 0) {
                    if (map[i][j + 1] && map[i][j + 1] === map[i][j]) {
                        //same number add
                        map[i][j] *= 2;
                        map[i].splice(j + 1, 1);
                        map[i].push(0);
                        j--;
                    }
                }
                if (map[i][j] === 0 && j === 0) {
                    map[i].splice(j, 1);
                    map[i].push(0);
                    j--;
                }
            }
        }
        return map;
    }