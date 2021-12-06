function day3Solution1(data) {
    houseCoord = [0,0];
    visitedHouses = [];
    visitedHouses.push(JSON.stringify([0,0]));
    for (let direction of data) {
        switch (direction) {
            case "^":
                houseCoord[1]--;
                break;
            case "v":
                houseCoord[1]++;
                break;
            case "<":
                houseCoord[0]--;
                break;
            case ">":
                houseCoord[0]++;
                break;
            default:
                console.assert(1==0, "Unreachable");
                break;
        }
        let coordString = JSON.stringify(houseCoord);
        if (visitedHouses.indexOf(coordString) < 0) {
            visitedHouses.push(coordString);
        }
    }
    return visitedHouses.length;
}