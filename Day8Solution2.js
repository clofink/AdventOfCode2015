function day8Solution2(data) {
    data = data.split('\n');
    let totalCode = 0;
    let totalString = 0;
    for (let row of data) {
        totalCode += row.length;
        let newString = '';
        newString += "\"";
        for (let char of row) {
            if (char == '"') {
                newString += '\\';
            }
            else if (char == '\\') {
                newString += "\\";
            }
            newString += char;
        }
        newString += "\"";
        totalString += newString.length;
    }
    return (totalString - totalCode);
}