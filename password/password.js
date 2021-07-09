const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')
const form = document.getElementById('password-generator')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includenumbersElement = document.getElementById('includeNumbers')
const includeSymbols = document.getElementById('includeSymbols')
const passwordShow = document.getElementById('passwordShow')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(9, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
    arrayFromLowToHigh(123, 126)
    )
    




charAmountNumber.addEventListener('input', syncCharacterAmount)
charAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = charAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, 
    includeNumbers, includeSymbols)
    passwordShow.innerText = password
})

function generatePassword(characterAmount, includeUppercase, 
    includeNumbers, includeSymbols) {
        let charCodes = LOWERCASE_CHAR_CODES
        if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
        if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

        const passwordCharacters = []
        for (let i = 0; i<characterAmount; i++) {
            const characterCode = charCodes[Math.floor(Math.random()*
            charCodes.length)]
            passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return passwordCharacters.join('')
    }

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i=low; i <= high; i++) {
        array.push(i)
    }  
    return array
}  

function syncCharacterAmount(e) {
    const value = e.target.value
    charAmountNumber.value = value
    charAmountRange.value = value
}





