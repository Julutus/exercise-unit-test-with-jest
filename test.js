test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("10 dollars should be converted to yen correclty", function(){
    const { fromDollarToYen } = require('./app.js');
    const euros = 10 / 1.07;
    const expected = euros * 156.5;
    expect(fromDollarToYen(10)).toBe(expected);
});

test("1000 yen should be converted to pounds correclty", function(){
    const { fromYenToPound } = require('./app.js');
    const euros = 1000 / 156.5;
    const expected = euros * 0.87;
    expect(fromYenToPound(1000)).toBe(expected);
});