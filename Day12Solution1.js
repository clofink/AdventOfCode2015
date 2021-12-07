function day12Solution1(data) {
    data = JSON.parse(data);
    let totalNum = 0;
    addNumbers(data);
    return totalNum;
    
    function addNumbers(json) {
        if (typeof(json) === 'object') {
            for (let key in json) {
                addNumbers(json[key]);
            }
        }
        else if (typeof(json) === 'number') {
            totalNum += json;
            return;
        }
        else {
            return;
        }
    }
}