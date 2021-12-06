function day2Solution1(data) {
    data = data.split('\n');
    let totalSquareFootage = 0;
    for (let package of data) {
        let dimensions = package.split('x');
        totalSquareFootage += getSurfaceArea(parseInt(dimensions[0]), parseInt(dimensions[1]), parseInt(dimensions[2]));
    }
    return totalSquareFootage;;

    function getSurfaceArea(l, w, h) {
        let side1 = 2*l*w;
        let side2 = 2*w*h;
        let side3 = 2*h*l;
        // only need to get one side, so min the calculations and then divide by two for one side
        let smallestSide = (Math.min(side1, side2, side3)) / 2;
        return side1 + side2 + side3 + smallestSide;
    }
}