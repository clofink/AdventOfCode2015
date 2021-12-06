function day3Solution2(data) {
    let visitedHouses = [];
    let santaCoord = [0,0];
    let roboCoord = [0,0];
    visitedHouses.push(JSON.stringify([0,0]));
    let turn = 1;
    for (let i = 0; i < data.length; i++) {
        turn = i % 2; // determine if it is an odd or even turn, Santa goes on odds
        switch (data[i]) {
            case "^":
                turn == 1 ? santaCoord[1]-- : roboCoord[1]--;
                break;
            case "v":
                turn == 1 ? santaCoord[1]++ : roboCoord[1]++;
                break;
            case "<":
                turn == 1 ? santaCoord[0]-- : roboCoord[0]--;
                break;
            case ">":
                turn == 1 ? santaCoord[0]++ : roboCoord[0]++;
                break;
            default:
                console.assert(1==0, "Unreachable");
                break;
        }
        let coordString = turn == 1 ? JSON.stringify(santaCoord) : JSON.stringify(roboCoord);
        if (visitedHouses.indexOf(coordString) < 0) {
            visitedHouses.push(coordString);
        }
    }
    return visitedHouses.length;
}