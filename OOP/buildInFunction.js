//buildin function manipulasi waktu(date)
const date = new Date()

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
})

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
})

console.log(timeInTokyo)
console.log(timeInJakarta)



//function membuat array
const angka1s10 = new Array(1,2,3,4,5,6)
console.log(angka1s10)

angka1s10.push(667678678678)
console.log(angka1s10)

//array dengan unique array
class UniqueArray extends Array {
    constructor(...args) {
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index)

        super(...uniqueValue)
    }

    push(item) {
        if (!this.includes(item)) {
            super.push(item)
        }
    }
}

const someArray = new UniqueArray('a','b','c','d')
console.log(someArray)

/*
Beberapa buildin function yang lain diantaranya:

Date
Object
Array
Math
String
Number
*/