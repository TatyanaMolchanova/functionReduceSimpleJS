// 3 reduce

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

// reduce arrow 

var totalAmount = orders.reduce((sum, order) =>sum + order.amount, 0)

// reduce full version

// var totalAmount = orders.reduce(function(sum, order) {
//     console.log('sum', sum, 'order.amount', order.amount, order)
//     return sum + order.amount
// }, 0)

// summarize with a loop

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount
// }

console.log(totalAmount)