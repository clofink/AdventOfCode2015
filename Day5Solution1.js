function day5Solution1(data) {
    data = data.split('\n');
    let niceWords = 0;
    for (let word of data) {
        if (isWordNice(word)) {
            niceWords++;
        }
    }
    return niceWords;

    function isWordNice(word) {
        if (containsStrings(word)) {
            return false;
        }
        if (countVowels(word) < 3) {
            return false;
        }
        if (countDoubleCharacters(word) < 1) {
            return false;
        }
        return true;
    }

    function countVowels(word) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let vowelsCount = 0;
        for (let character of word) {
            if (vowels.indexOf(character) >= 0) {
                vowelsCount++;
            }
        }
        return vowelsCount;
    }

    function countDoubleCharacters(word) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let doubleCharCount = 0;
        for (let letter of alphabet) {
            if (word.indexOf(letter + letter) > -1) {
                doubleCharCount++;
            }
        }
        return doubleCharCount;
    }

    function containsStrings(word) {
        let strings = ['ab', 'cd', 'pq', 'xy'];
        for (let string of strings) {
            if (word.indexOf(string) > -1) {
                return true;
            }
        }
        return false;
    }
}