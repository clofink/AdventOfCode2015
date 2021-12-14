function day16Solution1(data) {
    let criteria = {
        children: 3,
        cats: 7,
        samoyeds: 2,
        pomeranians: 3,
        akitas: 0,
        vizslas: 0,
        goldfish: 5,
        trees: 3,
        cars: 2,
        perfumes: 1
    }

    let aunts = parseInput(data);
    for (let i = 0; i < aunts.length; i++) {
        if (!checkPossibleMatch(aunts[i])) {
            continue;
        }
        else {
            return(i+1);
        }
    }

    function checkPossibleMatch(aunt) {
        // console.log(aunt)
        for (let key in aunt) {
            // console.log(aunt[key])
            if (aunt[key] === undefined) {
                continue;
            }
            else if (aunt[key] !== criteria[key]) {
                return false;
            }
        }
        return true;
    }

    function parseInput(input) {
        data = input.split('\r\n');
        let auntsInfo = [];
        for (let aunt of data) {
            let auntInfo = {children: undefined, cats: undefined, samoyeds: undefined, pomeranians: undefined, akitas: undefined, vizslas: undefined, goldfish: undefined, trees: undefined, cars: undefined, perfumes: undefined};
            let matches = aunt.match(/Sue \d{1,3}: (\w+: \d+), (\w+: \d+), (\w+: \d+)/);
            for (let i = 0; i < matches.length; i++) {
                if (i === 0) {
                    continue;
                }
                let temp = matches[i].split(': ');
                if (auntInfo.hasOwnProperty(temp[0])) {
                    auntInfo[temp[0]] = parseInt(temp[1]);
                }
            }
            auntsInfo.push(auntInfo);
        }
        return auntsInfo;
    }
}