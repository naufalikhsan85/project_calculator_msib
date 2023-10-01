function perkalian2angka(angka1, angka2){
    let result = angka1 * angka2

    return {
        angka1: angka1,
        angka2: angka2,
        hasil: result
    }
}

module.exports = {
    perkalian2angka
}