function day8Solution1(data) {
    data = data.split('\n');
    let totalCode = 0;
    let totalString = 0;
    for (let row of data) {
        let codeChars = row.length;
        let stringRow = row.replaceAll(/"$/g, '');
        stringRow = stringRow.replaceAll(/^"/g, '');
        stringRow = stringRow.replaceAll('\\"', 'o');
        stringRow = stringRow.replaceAll('\\\\', 'o');
        stringRow = stringRow.replaceAll(/\\x(?:\d|[abcdef]){2}/g, 'o');
        stringRow.trim();
        let stringChars = stringRow.length;
        totalCode += codeChars;
        totalString += stringChars;
    }
    return (totalCode - totalString);
}