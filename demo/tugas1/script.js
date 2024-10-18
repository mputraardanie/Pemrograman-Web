function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearAll() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value.replace('^', '**')); // Ganti ^ dengan ** untuk pangkat
        resultField.value = result;
    } catch (error) {
        alert('Input tidak valid');
        clearAll();
    }
}
