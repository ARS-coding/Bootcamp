

let e = [
    [0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
];

// let e = [
//     [1, 0, 1, 1],
//     [0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0],
//     [1, 0, 0, 1, 0],
//     [1, 0, 0, 1, 0],
// ];



function mineSweeper(array) {
    
    // Replace 1 with 9
    function nineInsteadOfOne(array) {
        let nineInsteadOfOneArray = array.map(function(row) { // Don't forget to change the "array".
            let newRow = row.map(function(column) {
                if (column === 1) {
                    // console.log(row);
                    return column = 9;
                }
                else {
                    // console.log(row);
                    return column;
                }
            });
            return newRow;
        });

        return nineInsteadOfOneArray;
    };

    // findTheBombsAround(nineInsteadOfOne(array));
    let theArrayThatWeWantToUse = nineInsteadOfOne(array); // Return the array that changed 1's to 9's.
    console.log(theArrayThatWeWantToUse);

    findTheBombsAround(theArrayThatWeWantToUse);

    function findTheBombsAround(array) {

    
        let row = 0;
        while (row < array.length) {    // Loop through arrays(rows).
            
            let column = 0;
            while (column < array[row].length) {    // Loop through elements(columns) in arrays(rows).
                //====================================================================//
                //          Get the corners          //
                    //          Get the top left corner         //
                if (row === 0 && column === 0) {
                    console.log("looking for the top left corner");
                    console.log(array[row][column]);
                    let thePlacesWeWantToLook = [array[row + 1][column], array[row][column + 1], array[row + 1][column + 1]];
                    function topLeftCorner(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                // console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    topLeftCorner(thePlacesWeWantToLook);
                }
                    //          Get the top left corner END         //
                    //          Get the top right corner            //
                else if (row === 0 && column === array[0].length - 1) {
                    console.log("looking for the top right corner");
                    console.log(array[row][column]);

                    let thePlacesWeWantToLook = [array[row + 1][column], array[row][column - 1], array[row + 1][column - 1]];
                    function topRightCorner(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    topRightCorner(thePlacesWeWantToLook);
                }
                    //          Get the top right corner END            //
                    //          Get the bottom left corner          //
                else if (row === array.length - 1 && column === 0) {
                    console.log("looking for the bottom left corner");
                    console.log(array[row][column]);

                    let thePlacesWeWantToLook = [array[row][column + 1], array[row - 1][column], array[row - 1][column + 1]];
                    function bottomLeftCorner(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    bottomLeftCorner(thePlacesWeWantToLook);
                }
                    //          Get the bottom left corner END          //
                    //          Get the bottom right corner         //
                else if (row === array.length - 1 && column === array[array.length - 1].length -1) {
                    console.log("looking for bottom right corner");
                    console.log(array[row][column]);

                    let thePlacesWeWantToLook = [array[row][column - 1], array[row - 1][column], array[row - 1][column - 1]];
                    function bottomRightCorner(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    bottomRightCorner(thePlacesWeWantToLook);
                }
                    //          Get the bottom right corner END         //
                //          Get the corners END         //
                //====================================================================//
                //          Get the middle sides          //
                    //          Get the top middle sides           //
                else if (row === 0 && column > 0 && column < array[row].length - 1) {
                    console.log("looking for middle sides at the top row");
                    console.log(array[row][column]);

                    let thePlacesWeWantToLook = [array[row][column - 1], array[row][column + 1], array[row + 1][column - 1], array[row + 1][column], array[row + 1][column + 1]];
                    function topMiddleSides(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length){

                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            }
                            i++;
                        }
                    }
                    topMiddleSides(thePlacesWeWantToLook);
                }
                    //          Get the top middle sides END           //
                    //          Get the bottom middle sides             //
                else if (row === array.length - 1 && column > 0 && column < array[row].length - 1) {
                    console.log("looking for middle sides at the bottom row");
                    console.log(array[row][column]);

                    let thePlacesWeWantToLook = [array[row][column - 1], array[row][column + 1], array[row - 1][column - 1], array[row - 1][column], array[row - 1][column + 1]];
                    function bottomMiddleSides(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    bottomMiddleSides(thePlacesWeWantToLook);
                }
                    //          Get the bottom middle sides END            //
                    //          Get the left middle sides           //
                else if (column === 0 && row > 0 && row < array.length - 1) {
                    console.log("looking for middle sides at the left");
                    console.log(array[row][column]);
                    let thePlacesWeWantToLook = [array[row - 1][column], array[row + 1][column], array[row - 1][column + 1], array[row][column + 1], array[row + 1][column + 1]];
                    function leftMiddleSides(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    leftMiddleSides(thePlacesWeWantToLook);
                }
                    //          Get the left middle sides END          //
                    //          Get the right middle sides          //
                else if (column === array[row].length - 1 && row > 0 && row < array.length - 1) {
                    console.log("looking for middle sides at the right");
                    console.log(array[row][column]);
                    let thePlacesWeWantToLook = [array[row - 1][column], array[row + 1][column], array[row - 1][column -1], array[row][column - 1],array[row + 1][column -1]];
                    function rightMiddleSides(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    rightMiddleSides(thePlacesWeWantToLook);
                }
                    //          Get the right middle sides END          //
                //          Get the middle sides END            //
                //====================================================================//
                else {
                    console.log("looking for center values");
                    console.log(array[row][column]);
                    let  thePlacesWeWantToLook = [array[row][column -1], array[row][column + 1], array[row - 1][column -1], array[row-1][column], array[row - 1][column + 1], array[row + 1][column - 1], array[row + 1][column], array[row + 1][column + 1]];

                    function rightMiddleSides(thePlacesWeWantToLook) {
                        let i = 0;
                        while (i < thePlacesWeWantToLook.length) {
                            if (array[row][column] !== 9 && (thePlacesWeWantToLook[i] === 9)) {
                                console.log("before the change: " + array[row][column]);
                                array[row][column]++;
                                console.log("after the change: " + array[row][column]);
                            };
                            i++;
                        }
                    };
                    rightMiddleSides(thePlacesWeWantToLook);
                }
                column++;
            };
            row++;
        };
        console.log(array);
        //                                  //                                //
    };

    // findTheBombsAround(theArrayThatWeWantToUse);
};
mineSweeper(e);