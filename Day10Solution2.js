
function day10Solution1(data) {
    let previousValue = data;
    let charCounts = '';
    for (let i = 0; i < 50; i++) {
        let currentChar = '';
        charCounts = '';
        let charCount = 0;
        for (let t = 0; t < previousValue.length; t++) {
            let char = previousValue[t];
            if (char != currentChar) {
                if (charCount > 0) {
                    charCounts += charCount + currentChar;
                }
                currentChar = char;
                charCount = 1;
            }
            else {
                charCount++;
            }
            if (t === (previousValue.length - 1)) {
                charCounts += charCount + currentChar;
            }
        }
        previousValue = charCounts;
    }
    return charCounts.length;
}