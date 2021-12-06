function day2Solution2(data) {
    data = data.split('\n');
    let totalSquareFootage = 0;
    for (let package of data) {
        let dimensions = package.split('x');
        totalSquareFootage += getShortestDistance(parseInt(dimensions[0]), parseInt(dimensions[1]), parseInt(dimensions[2]));
    }
    return totalSquareFootage;;

    function getShortestDistance(l, w, h) {
        let bowLength = l * w *h;
        let sides = [l, w, h];
        sides.sort(function(a,b) {if (a > b) {return 1}; if (b > a) {return -1}; return 0;});
        let ribbonLength = (sides[0] * 2) + (sides[1] * 2);
        return bowLength + ribbonLength;
    }
}