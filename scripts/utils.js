function pretty(text) {
    text = text.split('')
    text[0] = text[0].toUpperCase()
    return text.join('')
}
function addSign(num) {
    let colour = 'green'

    if (num >= 10) { colour = 'green' }
    else if (num >= 5) { colour = 'orange' }
    else if (num >= 0) { colour = 'orangered' }
    else if (num >= -4) { colour = 'red' }
    else { colour = 'purple' }

    if (num >= 0) {
        num = '+' + num
    }
    return `<span class='${colour}'>${num}</span>`
}