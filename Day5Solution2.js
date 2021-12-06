function day5Solution2(data) {
    data = data.split('\n');
    let niceWords = 0;
    for (let word of data) {
        if (isWordNice(word)) {
            niceWords++;
        }
    }
    return niceWords;

    function isWordNice(word) {
        if (!containsAXAFormat(word)) {
            return false;
        }
        if (!containsDoublePair(word)) {
            return false;
        }
        return true;
    }

    function containsAXAFormat(word) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let letter of alphabet) {
            let regex = new RegExp(letter + '.' + letter);
            if (word.match(regex)) {
                return true;
            }
        }
        return false;
    }

    function containsDoublePair(word) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let letter1 of alphabet) {
            for (let letter2 of alphabet) {
                let regex = new RegExp(letter1 + letter2 + '.*' + letter1 + letter2);
                if (word.match(regex)) {
                    return true;
                }
            }
        }
        return false;
    }
}