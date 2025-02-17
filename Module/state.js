const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeMachineReady = true

//jika mengeksport multi nilai, maka gunakan objek literals "{}"
//module.exports = {coffeStock, isCoffeMachineReady}

export {isCoffeMachineReady, coffeStock}