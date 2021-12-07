function day8Solution1(data) {
    data = data.split('\r\n');
    let totalCode = 0;
    let totalString = 0;
    for (let row of data) {
        let codeChars = row.length;
        let stringRow = row.replaceAll('\\"', 'o');
        stringRow = stringRow.replaceAll(/\\x\d{2}/g, 'o');
        stringRow = stringRow.replaceAll('\\\\', 'o');
        stringRow = stringRow.replaceAll('"', '');
        stringRow.trim();
        let stringChars = stringRow.length;
        totalCode += codeChars;
        totalString += stringChars;
    }
    console.log(totalString, totalCode);
    return (totalCode - totalString);
}