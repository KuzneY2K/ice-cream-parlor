let iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

let toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

let outputTable = document.getElementById('table-body')
let outputTable2 = document.getElementById('table-body2')


function drawtoCartIC() {

    let dataTable = ''
    iceCream.forEach(ic => {
        if (ic.quantity > 0) {
            dataTable += `<tr>
                                    <td id="icecreamName">${ic.name}</td>
                                    <td id="icecreamQty">x${ic.quantity}</td>
                                    <td id="icecreamPrice">$${ic.price}</td>
                                    <td id="icecreamTotal">$${icTotal}</td>
                                </tr>`
        }
    })
    sum(icTotal, tTotal)
    outputTable.innerHTML = dataTable

}

function drawtoCartT() {

    let dataTable2 = ''

    toppings.forEach(t => {
        if (t.quantity > 0) {
            tTotal = t.quantity * t.price
            dataTable2 += `<tr>
                                    <td id="icecreamName">${t.name}</td>
                                    <td id="icecreamQty">x${t.quantity}</td>
                                    <td id="icecreamPrice">$${t.price}</td>
                                    <td id="icecreamTotal">$${tTotal}</td>
                                </tr>`
        }
    })
    outputTable2.innerHTML = dataTable2

}

function buyIceCream(item) {

    let foundIcecream = iceCream.find(ic => ic.name == item)
    foundIcecream.quantity++
    drawtoCartIC()
    console.log(foundIcecream)
}

function buyTopping(item) {

    let foundTopping = toppings.find(t => t.name == item)
    foundTopping.quantity++
    drawtoCartT()
    console.log(foundTopping)
}