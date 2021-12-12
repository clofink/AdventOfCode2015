function day13Solution1(data) {
    data = data.split('\n');
    let seatingPreferences = {};
    for (let line of data) {
        parseLine(line);
    }

    let happinessScores = [];
    for (let seating of permutator(Object.keys(seatingPreferences))) {
        let happiness = 0;
        for (let i = 0; i < seating.length; i++) {
            let person = seating[i];
            let personNextToThem = (i + 1) < seating.length ? seating[i + 1] : seating[0];
            happiness += seatingPreferences[person][personNextToThem] + seatingPreferences[personNextToThem][person];
        }
        happinessScores.push(happiness);
    }
    return (Math.max(...happinessScores))

    function parseLine(line) {
        line = line.split(' ');
        let happiness = line[2] === 'gain'? parseInt(line[3]) : -(parseInt(line[3]));
        let person = line[10].substring(0, (line[10].length - 1));
        if (seatingPreferences[line[0]]) {
            seatingPreferences[line[0]][person] = happiness;
        }
        else {
            seatingPreferences[line[0]] = {};
            seatingPreferences[line[0]][person] = happiness;
        }

    }

    // from stack overflow
    function permutator(inputArr) {
        var results = [];
        function permute(arr, memo) {
            var cur, memo = memo || [];
            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }
            return results;
        }
        return permute(inputArr);
    }
}