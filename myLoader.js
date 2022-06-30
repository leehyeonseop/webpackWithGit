module.exports = function (item) {
    console.log('hello myLoader')
    console.log(item)

    return item.replace('console.log(', 'alert(')
}