function day1Solution2(data) {
    let floor = 0;
    for (let d = 0; d < data.length; d++) {
        switch (data[d]) {
            case "(":
                floor++;
                break;
            case ")":
                floor--;
                break;
            default:
                console.assert('This should not be reached');
                break;
        }
        if (floor < 0) {
            return d + 1;
        }
    }
}