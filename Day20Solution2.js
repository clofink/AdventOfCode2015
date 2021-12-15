function day20Solution2(data) {
    data = parseInt(data);

    let num = 1;
    let houseFound = false;
    while (!houseFound) {
        let score = 0;
        let factors = getFactors(num);
        for (let factor of factors) {
            if ((factor * 50) >= num) {
                score += (factor * 11);
            }
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