/*
mirip dengan map, tetapi callback dari fungsi ini bernilai boolean

*/

const siswa = [
    {
        name : "Prismana",
        nilai : 90
    },
    {
        name : "Cindi",
        nilai : 56
    },
    {
        name : 'Niken',
        nilai : 89
    }
]

const beasiswa = siswa.filter((siswa) => siswa.nilai > 80)

console.log(beasiswa)