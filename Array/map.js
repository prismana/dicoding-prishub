const mapKu = new Map([
    ['kunci', 'satu'],
    [22, "yap ini masih kunci"],
    [false, true]
])

console.log(mapKu);

//mendapatkan map
console.log("dapetin kunci: ", mapKu.get("satu"));
console.log("Kita juga bisa menyeting map", mapKu.set("cindi", "Prismana"));