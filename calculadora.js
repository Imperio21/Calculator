
String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function sendNum(value) {
    document.getElementById("screen").innerHTML += value
}

function clearScr() {
    document.getElementById('screen').innerHTML = '';
}

function equalTo() {
    let formatedCalc = []
    let count = document.getElementById("screen").innerHTML


    formatedCalc = count.split('')
    formatedCalc.map((e, i, arr) => {
        if (e == '%') {
            formatedCalc.splice(i, 1, '*')
            formatedCalc.splice((i - 1), 0, "(")
            formatedCalc.splice((i + 3), 0, "/100)")
        }
    })
    formatedCalc = formatedCalc.join()
    formatedCalc = formatedCalc.replaceAll(',', '')
    console.log('res', formatedCalc)

    try {
        document.getElementById('screen').innerHTML = evil(formatedCalc)

    } catch (e) {
        document.getElementById('screen').innerHTML = "expressão invalida"
    }
}
function evil(fn) {
    return new Function('return ' + fn)();
}







