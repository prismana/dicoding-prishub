


//rest parameter
function jumlah(...angka) 
{
    let j = 0
    for (let i of angka) {
        j += i
    }

    return j
}

console.log(jumlah(1, 2, 3, 4, 5, 6));

for (const iterator of object) {
    
}