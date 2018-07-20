var removeFromArray = function(...args) {
    const array = args[0];
    newArray = array.filter(val => !args.includes(val))
    return newArray;
}

module.exports = removeFromArray
