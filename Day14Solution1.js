function day14Solution1(data) {
    data = data.split('\n');
    let parsedLines = [];
    for (let line of data) {
        parsedLines.push(parseLine(line));
    }
    // why not just calculate how many seconds they can travel for
    let distancePerReindeer = {};
    for (let reindeer of parsedLines) {
        let secondsTravelled = 0;
        let secondsRested = 0;
        let travelOrRest = 0;
        while ((secondsTravelled + secondsRested) < 2503) {
            if (travelOrRest % 2 === 0) {
                secondsTravelled += reindeer.length;
            }
            else {
                secondsRested += reindeer.rest;
            }
            travelOrRest++;
        }
        distancePerReindeer[reindeer.name] = secondsTravelled * reindeer.speed;
    }

    let reindeers = Object.keys(distancePerReindeer);
    reindeers.sort(function(a,b) {
        if (distancePerReindeer[a] > distancePerReindeer[b]) {
            return -1;
        }
        if (distancePerReindeer[a] < distancePerReindeer[b]) {
            return 1;
        }
        return 0;
    })
    return distancePerReindeer[reindeers[0]];

    function parseLine(line) {
        // Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
        line = line.split(' ');
        return {name: line[0], speed: parseInt(line[3]), length: parseInt(line[6]), rest: parseInt(line[13])}
    }
}