function addTokens(input, tokens){
    if(typeof input != 'string') {
        throw 'Invalid input'
    }
    if(input.length < 6) {
        throw 'Input should have at least 6 characters'
    }
    for(let i = 0; i < tokens.length; i++) {
        if(Object.keys(tokens[i]).length != 1 || !(Object.hasOwn(tokens[i], 'tokenName')) || typeof tokens[i].tokenName != 'string') {
            throw 'Invalid array format'
        }
    }
    if(!(input.includes('...'))) {
        return input
    } else {
        let i = 0
        while(input.includes('...') && i < tokens.length) {
            let newToken = '${' + tokens[i].tokenName + '}'
            input = input.replace('...', newToken)
            i++
        }

        return input
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;