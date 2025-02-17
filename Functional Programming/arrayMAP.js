const arNamaOrang = ["Harry", "Poter", "Ron"].map((namaBaru) => {return `Hai ${namaBaru}`})

const sapaOrang = kumpulanNama => {
    return kumpulanNama.map((namaBaru2) => {return `Hai ${namaBaru2}`})
}

let a = sapaOrang(arNamaOrang)
console.log(a)