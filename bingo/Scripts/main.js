var score = 0;
var sel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function add() {
    score += 1;
    document.getElementById('sum').innerHTML = score;
}

function subtract() {
    score -= 1;
    document.getElementById('sum').innerHTML = score;
}

function clr() {
    var counter = 0
    for (let i of sel) {
      document.querySelector(`#${i}`).style.color = 'whitesmoke'
      window[nums[counter]] = 0;
      counter += 1
    }
}

let num = 0;
function switcher() {
    num += 1;
    if (num % 2 === 0){
        document.getElementById('A').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('A').style.color = 'rgb(255, 5, 192)';
        num = 1;
    }
}

var num1 = 0;
function switcher1() {
    num1 += 1;
    if (num1 % 2 === 0){
        document.getElementById('B').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('B').style.color = 'rgb(255, 5, 192)';
        num1 = 1;
    }
}

var num2 = 0;
function switcher2() {
    num2 += 1;
    if (num2 % 2 === 0){
        document.getElementById('C').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('C').style.color = 'rgb(255, 5, 192)';
        num2 = 1;
    }
}

var num3 = 0;
function switcher3() {
    num3 += 1;
    if (num3 % 2 === 0){
        document.getElementById('D').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('D').style.color = 'rgb(255, 5, 192)';
        num3 = 1;
    }
}

var num4 = 0;
function switcher4() {
    num4 += 1;
    if (num4 % 2 === 0){
        document.getElementById('E').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('E').style.color = 'rgb(255, 5, 192)';
        num4 = 1;
    }
}

let num5 = 0;
function switcher5() {
    num5 += 1;
    if (num5 % 2 === 0){
        document.getElementById('F').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('F').style.color = 'rgb(255, 5, 192)';
        num5 = 1;
    }
}

var num6 = 0;
function switcher6() {
    num6 += 1;
    if (num6 % 2 === 0){
        document.getElementById('G').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('G').style.color = 'rgb(255, 5, 192)';
        num6 = 1;
    }
}

var num7 = 0;
function switcher7() {
    num7 += 1;
    if (num7 % 2 === 0){
        document.getElementById('H').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('H').style.color = 'rgb(255, 5, 192)';
        num7 = 1;
    }
}

var num8 = 0;
function switcher8() {
    num8 += 1;
    if (num8 % 2 === 0){
        document.getElementById('I').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('I').style.color = 'rgb(255, 5, 192)';
        num8 = 1;
    }
}

var num9 = 0;
function switcher9() {
    num9 += 1;
    if (num9 % 2 === 0){
        document.getElementById('J').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('J').style.color = 'rgb(255, 5, 192)';
        num9 = 1;
    }
}
let num10 = 0;
function switcher10() {
    num10 += 1;
    if (num10 % 2 === 0){
        document.getElementById('K').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('K').style.color = 'rgb(255, 5, 192)';
        num10 = 1;
    }
}

var num11 = 0;
function switcher11() {
    num11 += 1;
    if (num11 % 2 === 0){
        document.getElementById('L').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('L').style.color = 'rgb(255, 5, 192)';
        num11 = 1;
    }
}

var num12 = 0;
function switcher12() {
    num12 += 1;
    if (num12 % 2 === 0){
        document.getElementById('M').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('M').style.color = 'rgb(255, 5, 192)';
        num12 = 1;
    }
}

var num13 = 0;
function switcher13() {
    num13 += 1;
    if (num13 % 2 === 0){
        document.getElementById('N').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('N').style.color = 'rgb(255, 5, 192)';
        num13 = 1;
    }
}

var num14 = 0;
function switcher14() {
    num14 += 1;
    if (num14 % 2 === 0){
        document.getElementById('O').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('O').style.color = 'rgb(255, 5, 192)';
        num14 = 1;
    }
}

let num15 = 0;
function switcher15() {
    num15 += 1;
    if (num15 % 2 === 0){
        document.getElementById('P').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('P').style.color = 'rgb(255, 5, 192)';
        num15 = 1;
    }
}

var num16 = 0;
function switcher16() {
    num16 += 1;
    if (num16 % 2 === 0){
        document.getElementById('Q').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('Q').style.color = 'rgb(255, 5, 192)';
        num16 = 1;
    }
}

var num17 = 0;
function switcher17() {
    num17 += 1;
    if (num17 % 2 === 0){
        document.getElementById('R').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('R').style.color = 'rgb(255, 5, 192)';
        num17 = 1;
    }
}

var num18 = 0;
function switcher18() {
    num18 += 1;
    if (num18 % 2 === 0){
        document.getElementById('S').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('S').style.color = 'rgb(255, 5, 192)';
        num18 = 1;
    }
}

var num19 = 0;
function switcher19() {
    num19 += 1;
    if (num19 % 2 === 0){
        document.getElementById('T').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('T').style.color = 'rgb(255, 5, 192)';
        num19 = 1;
    }
}

var num20 = 0;
function switcher20() {
    num20 += 1;
    if (num20 % 2 === 0){
        document.getElementById('U').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('U').style.color = 'rgb(255, 5, 192)';
        num20 = 1;
    }
}

var num21 = 0;
function switcher21() {
    num21 += 1;
    if (num21 % 2 === 0){
        document.getElementById('V').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('V').style.color = 'rgb(255, 5, 192)';
        num21 = 1;
    }
}

var num22 = 0;
function switcher22() {
    num22 += 1;
    if (num22 % 2 === 0){
        document.getElementById('W').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('W').style.color = 'rgb(255, 5, 192)';
        num22 = 1;
    }
}

var num23 = 0;
function switcher23() {
    num23 += 1;
    if (num23 % 2 === 0){
        document.getElementById('X').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('X').style.color = 'rgb(255, 5, 192)';
        num23 = 1;
    }
}

var num24 = 0;
function switcher24() {
    num24 += 1;
    if (num24 % 2 === 0){
        document.getElementById('Y').style.color = 'whitesmoke';
    }
    else {
        document.getElementById('Y').style.color = 'rgb(255, 5, 192)';
        num24 = 1;
    }
}