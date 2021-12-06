function day1Solution1(data) {
    let floor = 0;
    for (let direction of data) {
        switch (direction) {
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
    }
    return floor;
}