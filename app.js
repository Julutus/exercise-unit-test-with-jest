// Valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
}

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

// Función para convertir de dólares a yenes
const fromDollarToYen  = (dollars) => {
    // Primero convertir dólares a euros, luego euros a yenes
    let euros = dollars / oneEuroIs.USD; // De USD a EUR
    let yenes = euros * oneEuroIs.JPY; // De EUR a JPY
    return yenes;
};

// Función para convertir de yenes a libras
const fromYenToPound = (yenes) => {
    // Primero convertir yenes a euros, luego euros a libras
    let euros = yenes / oneEuroIs.JPY; // De JPY a EUR
    let pounds = euros * oneEuroIs.GBP; // De EUR a GBP
    return pounds;
};

// Ejemplos de uso:
console.log(fromEuroToDollar(10));    // Convertir 10 EUR a USD
console.log(fromDollarToYen(10));     // Convertir 10 USD a JPY
console.log(fromYenToPound(1000));    // Convertir 1000 JPY a GBP

//Exportar las funciones
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};