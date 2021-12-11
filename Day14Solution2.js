function day14Solution2(data) {
    data = data.split('\n');
    let parsedLines = [];
    for (let line of data) {
        parsedLines.push(parseLine(line));
    }

    for (let i = 0; i < 2503; i++) {
        for (let reindeer of parsedLines) {
            // console.log({...reindeer});
            if (!reindeer.isResting) {
                reindeer.currentDistance += reindeer.speed;
                reindeer.travelDay++;
                if (reindeer.travelDay === reindeer.length) {
                    reindeer.isResting = true;
                    reindeer.travelDay = 0;
                }
            }
            else {
                reindeer.waitingDay++;
                if (reindeer.waitingDay === reindeer.rest) {
                    reindeer.waitingDay = 0;
                    reindeer.isResting = false;
                }
            }
        }
        let leaders = getCurrentLeader(parsedLines);
        for (let leader of leaders) {
            leader.score++;
        }
    }
    parsedLines.sort(function(a,b) {
        return b['score'] - a['score'];
    })
    return parsedLines[0].score;

    function parseLine(line) {
        // Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
        line = line.split(' ');
        return {
            name: line[0],
            speed: parseInt(line[3]),
            length: parseInt(line[6]),
            rest: parseInt(line[13]),
            currentDistance: 0,
            isResting: false,
            waitingDay: 0,
            travelDay: 0,
            score: 0,
        }
    }

    function getCurrentLeader(reindeers) {
        let leaders = [];
        reindeers.sort(function(a,b) {
            return b['currentDistance'] - a['currentDistance'];
        })
        let currentLeaderDist = reindeers[0].currentDistance;
        for (let reindeer of reindeers) {
            if (reindeer.currentDistance === currentLeaderDist) {
                leaders.push(reindeer)
            }
        }
        return leaders;
    }
}