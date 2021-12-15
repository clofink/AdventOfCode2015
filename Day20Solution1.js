function day20Solution1(data) {
    data = parseInt(data);

    let num = 1;
    let houseFound = false;
    while (!houseFound) {
        let score = 0;
        let factors = getFactors(num);
        for (let factor of factors) {
            score += (factor * 10);
        }
        if (score >= data) {
            houseFound = true;
            return num;
        }
        num++;
    }

    function getFactors(A) {
        var output = [];
        
        for (var i=1; i <= Math.sqrt(A); i++) {
            if (A % i === 0) {
            output.push(i);
        
            if (i !== Math.sqrt(A)) output.push(A/i);
            }
        }
        
        if (output.indexOf(A) === -1) output.push(A);
        
        return output;
    }
}