function convertTemperature(event) {
    event.preventDefault();

    var tempVal = parseFloat(document.getElementById('tempVal').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    var result;

    if (fromUnit === toUnit) {
        result = tempVal;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (tempVal * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (tempVal - 32) * 5/9;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = tempVal + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = tempVal - 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (tempVal - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (tempVal - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').textContent = isNaN(result) ? "Invalid input" : result.toFixed(2);
}
