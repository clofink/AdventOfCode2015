function day11Solution2(data) {
    data = data.split('\n');
    for (let password of data) {
        let newPass = password;
        while (!checkIfValid(newPass)) {
            newPass = incrementPassword(newPass);
        }
        newPass = incrementPassword(newPass);
        while (!checkIfValid(newPass)) {
            newPass = incrementPassword(newPass);
        }
        return newPass;
    }

    function incrementPassword(password) {
        let newPass = password;
        for (let i = (newPass.length-1); i >= 0; i--) {
            if (newPass[i] === 'z') {
                newPass = replaceCharAt(newPass, i, incrementLetter(newPass[i]));
                continue;
            }
            else {
                newPass = replaceCharAt(newPass, i, incrementLetter(newPass[i]));
                return newPass;
            }
        }
    }

    function replaceCharAt(string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    function checkIfValid(password) {
        if (!containsLetterStraight(password)) {
            return false;
        }
        //console.log(`${password} contains 3 incrementing letters in a row`)
        if (containsForbiddenLettters(password)) {
            return false;
        }
        //console.log(`${password} contains no forbidden letters`)
        if (!containsTwoPairs(password)) {
            return false;
        }
        //console.log(`${password} contains two letter pairs`)
        return true;
    }

    function incrementLetter(letter) {{
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        // ffind what letter you're at currently
        let currentIndex = alphabet.indexOf(letter);
        let newLetter;
        // check if the next letter exists
        if ((currentIndex + 1) < alphabet.length){
            // if it does, return it
            newLetter = alphabet[currentIndex + 1];
        }
        // otherwise loop back to return the first letter
        else {
            newLetter = alphabet[0];
        }
        return newLetter
    }}

    function containsLetterStraight(password) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < (alphabet.length - 2); i++) {
            let window = alphabet[i] + alphabet[i+1] + alphabet[i+2];
            if (password.indexOf(window) > -1) {
                // if we find one, just return true
                return true;
            }
        }
        // otherwise return false
        return false;
    }
    function containsForbiddenLettters(password) {
        if (password.indexOf('i') > -1) {
            return true;
        }
        if (password.indexOf('l') > -1) {
            return true;
        }
        if (password.indexOf('o') > -1) {
            return true;
        }
        return false;
    }

    function containsTwoPairs(password) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let pairCount = 0;
        for (let letter of alphabet) {
            let regex = new RegExp(`${letter}${letter}`);
            if (password.search(regex) > -1) {
                pairCount++;
            }
        }
        if (pairCount > 1) {
            return true;
        }
        return false;
    }
}