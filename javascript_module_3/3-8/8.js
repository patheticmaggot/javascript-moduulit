'use strict';
let value, ans, numb1, numb2;

function operations() {
    for (let i = 0; i < operation.length; i++) {
        if (operation.options[i].selected === true) {
            value = (operation.options[i].value);
        }
    }
}

function calculator() {
    numb1 = parseFloat(document.getElementById('num1').value);
    numb2 = parseFloat(document.getElementById('num2').value);
    switch (value) {
        case 'add':
            ans = numb1 + numb2
            break;
        case 'sub':
            ans = numb1 - numb2
            break;
        case 'multi':
            ans = numb1 * numb2
            break;
        case 'div':
            ans = numb1 / numb2
            break;
        default:
            ans = numb1 + numb2
    }

    if (isNaN(ans)) {
        document.getElementById('result').innerHTML = 'nothing to caculate...'
    } else {
        document.getElementById('result').innerHTML = 'Result: '+ ans
    }
}
document.querySelector('#start').addEventListener('click', function () {
    calculator()
});
document.getElementById('operation').addEventListener('click', function () {
    operations()
});