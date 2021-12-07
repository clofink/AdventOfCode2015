function day12Solution2(data) {
    data = JSON.parse(data);
    let totalNum = 0;
    addNumbers(data);
    return totalNum;
    
    function addNumbers(json) {
        if (Array.isArray(json)) {
            for (let item of json) {
                addNumbers(item);
            }
        }
        else if (typeof(json) === 'object') {
            if (Object.values(json).indexOf('red') > -1) {
                return;
            }
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