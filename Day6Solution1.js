function day6Solution1(data) {
    data = data.split('\r\n');
    let grid = createGrid();
    for (let string of data) {
        let instruction = parseInstruction(string);
        let lights = getLightsInRange(instruction.x1, instruction.y1, instruction.x2, instruction.y2);
        switch (instruction.instruction) {
            case "toggle":
                toggleLights(lights);
                break;
            case "turn on":
                turnOnLights(lights);
                break;
            case "turn off":
                turnOffLights(lights);
                break;
            default:
                console.assert(1==2, `Invalid instruction ${instruction}`);
                break;
        }
    }
    return countLitLights();;

    function countLitLights() {
        let countLit = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let t = 0; t < grid[i].length; t++) {
                if (grid[i][t] === 1) {
                    countLit++;
                }
            }
        }
        return countLit;
    }
    function toggleLights(coords) {
        for (let coord of coords) {
            // each coord will be a 2 element array
            if (grid[coord[1]][coord[0]] === 1) {
                grid[coord[1]][coord[0]] = 0;
            }
            else {
                grid[coord[1]][coord[0]] = 1;
            }
        }
    }
    function turnOnLights(coords) {
        for (let coord of coords) {
            // each coord will be a 2 element array
            grid[coord[1]][coord[0]] = 1;
        }
    }
    function turnOffLights(coords) {
        for (let coord of coords) {
            // each coord will be a 2 element array
            grid[coord[1]][coord[0]] = 0;
        }
    }
    function getLightsInRange(x1, y1, x2, y2) {
        let arrayOfCoords = [];
        if (x2 < x1) {
            // swap so that x1 is always less than x2
            let temp = x1;
            x1 = x2;
            x2 = temp;
        }
        if (y2 < y1) {
            // swap so that y1 is always less than y2
            let temp = y1;
            y1 = y2;
            y2 = temp;
        }
        for (let  i = 0; i < ((x2 - x1) + 1); i++) {
            for (let  o = 0; o < ((y2 - y1) + 1); o++) {
                arrayOfCoords.push([x1 + i, y1 + o]);
            }
        }
        return arrayOfCoords;
    }
    function parseInstruction(line) {
        let words = line.split(' ');
        let firstCoordPos = 2;
        let instruction;
        if (words[0] === "toggle") {
            firstCoordPos = 1;
            instruction = 'toggle';
        }
        else {
            if (words[1] === "on") {
                instruction = 'turn on';
            }
            else {
                instruction = 'turn off';
            }
        }
        let start = words[firstCoordPos].split(',');
        let end = words[firstCoordPos+2].split(',');

        return {instruction: instruction, x1: parseInt(start[0]), y1: parseInt(start[1]), x2: parseInt(end[0]), y2: parseInt(end[1])};
    }
    function createGrid() {
        let grid = [];
        for (let i = 0; i < 1000; i++) {
            let row = [];
            for (let t = 0; t < 1000; t++) {
                row.push(0);
            }
            grid.push(row);
        }
        return grid;
    }
}