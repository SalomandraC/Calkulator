let rezultEl = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBTM = document.getElementById('submit')
let slogenieBTN = document.getElementById('plus')
let vichtanieBTN = document.getElementById('minus')
let znak = 1

function printRezult(result) {
    if (result >= 0){
        rezultEl.style.color = 'green'
    }
    else{
        rezultEl.style.color = 'red'
    }
    rezultEl.textContent = result
}

slogenieBTN.onclick = function(){
    znak = 1
}

vichtanieBTN.onclick = function(){
    znak = -1
}

submitBTM.onclick = function(){
    if (znak == '1') {
        const sum = Number(input1.value) + Number(input2.value)
        printRezult(sum)
    }
    else {
        const sum = Number(input1.value) - Number(input2.value)
        printRezult(sum)
    }
}