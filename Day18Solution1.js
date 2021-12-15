function day18Solution1(data) {
    data = parseInput(data);
    let steps = 100;
    
    for (let i = 0; i < steps; i++) {
        data = updateMap(data);
    }
    return countOn(data);

    function getNeighbors(pointCoords, map) {
        let pointY = pointCoords[0];
        let pointX = pointCoords[1];
        let neighbors = [];
        for (let y = (pointY  - 1); y <= (pointY + 1); y++) {
            for (let x = (pointX  - 1); x <= (pointX + 1); x++) {
                if (y === pointY && x === pointX) {
                    continue;
                }
                if (y >= 0 && x >= 0 && y < map.length && x < map[0].length) {
                    neighbors.push([y,x]);
                }
            }
        }
        return neighbors;
    }

    function parseInput(data) {
        data = data.split('\n');
        let newData = [];
        for (let line of data) {
            newData.push(line.split(''));
        }
        return newData;
    }

    function updateMap(map) {
        // make a copy of the map
        // update the copy while iterating through the current map
        // then return the new map only, discard the old
        let newMap = JSON.parse(JSON.stringify(map));
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[0].length; x++) {
                let point = map[y][x];
                let pointCoords = [y, x]
                let neighbors = getNeighbors(pointCoords, map);
                let neighborOnCount = countOns(neighbors, map);
                if (point === '#') {
                    if (neighborOnCount !== 2 && neighborOnCount !== 3) {
                        newMap[y][x] = '.';
                    }
                }
                else {
                    if (neighborOnCount === 3) {
                        newMap[y][x] = '#';
                    }
                }
            }
        }
        return newMap;
    }
    
    function countOns(listOfNeighbors, map) {
        let count = 0;
        for (let neighbor of listOfNeighbors) {
            let pointY = neighbor[0];
            let pointX = neighbor[1]
            if (map[pointY][pointX] === '#') {
                count++;
            }
        }
        return count;
    }

    function countOn(map) {
        let count = 0;
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[0].length; x++) {
                if (map[y][x] === '#') {
                    count++;
                }
            }
        }
        return count;
    }
}