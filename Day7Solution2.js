
function day7Solution2(data) {
    data = data.split('\r\n');
    let variables = {};
    // each line ends with an assignment using ->
    // if we split on that, we can get the variable being assigned to and the expression that is being assigned
    for (let line of data) {
        parseInstruction(line);
    }
    let value = evaluateExpression('a');
    return value;


    function parseInstruction(line) {
        // each line ends with an assignment using ->
        // if we split on that, we can get the variable being assigned to and the expression that is being assigned
        let instruction =  line.split(' -> ');
        let expression = instruction[0].split(' ');
        let parsedExpression = {};
        parsedExpression.arguments = [];
        for (let word of expression) {
            if (isKeyWord(word)) {
                parsedExpression.operation = word;
            }
            else {
                if (!isNaN(parseInt(word))) {
                    parsedExpression.arguments.push(parseInt(word));
                }
                else {
                    parsedExpression.arguments.push(word);
                }
            }
        }
        assignVariableValue(instruction[1], parsedExpression);
    }

    function assignVariableValue(variableName, value) {
        if (variableName === 'b') {
            value = 956;
        }
        variables[variableName] = value;
    }

    function isKeyWord(word) {
        let keywords = [
            'AND',
            'OR',
            'NOT',
            'LSHIFT',
            'RSHIFT',
        ]
        if (keywords.indexOf(word) > -1) {
            return true;
        }
        return false;
    }

    function evaluateExpression(variableName) {
        let instruction = variables[variableName];
        if (typeof(instruction) === 'number') {
            return instruction;
        }
        let arguments = [];
        for (let argument of instruction.arguments) {
            if (typeof(argument) != 'number') {
                arguments.push(evaluateExpression(argument));
            }
            else {
                arguments.push(argument);
            }
        }
        if (instruction.operation) {
            let result;
            switch (instruction.operation) {
                case "AND":
                    result = bitwiseAnd(arguments[0], arguments[1]);
                    break;
                case "OR":
                    result = bitwiseOr(arguments[0], arguments[1]);
                    break;
                case "NOT":
                    result = bitwiseNot(arguments[0]);
                    break;
                case "LSHIFT":
                    result = leftShift(arguments[0], arguments[1]);
                    break;
                case "RSHIFT":
                    result = rightShift(arguments[0], arguments[1]);
                    break;
                default:
                    console.log(instruction);
                    console.assert(1==2, `Unknown Operation: ${instruction.operation}`);
                    break;
            }
            assignVariableValue(variableName, result);
            return result;
        }
        if (!instruction.operation) {
            assignVariableValue(variableName, arguments[0]);
            return arguments[0];
        }
    }

    function bitwiseAnd(left, right) {
        return (left & right);
    }

    function bitwiseOr(left, right) {
        return (left | right);
    }

    function bitwiseNot(value) {
        return (value ^ 65535);
    }

    function leftShift(value, amount) {
        return (value << amount);
    }

    function rightShift(value, amount) {
        return (value >> amount);
    }
}