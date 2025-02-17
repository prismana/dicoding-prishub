/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini

function minimal(a, b) 
{
    switch (a < b) {
        case true:
            return a
            break;

        case false:
            return b
            break
    
        default:
            return a
            break
    }
}


function findIndex(array, numOfArray) 
{
    let index = 0

    for (const i of array) {
        if (numOfArray == i) 
        {
            return index
        }

        index += 1
    }

    return -1
}

console.log(minimal(78, 567567));

//test findIndex
console.log(findIndex([1, 2, 3, 4, 5], 76))



//debug
/*let b = [1,2,3,4]
console.log(typeof(b));

for (const i of b) {
    console.log(i);
}*/
