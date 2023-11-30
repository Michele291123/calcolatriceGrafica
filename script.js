let calc = document.getElementById("displayInput")

function AC() {
    calc.textContent = ""
    box = 0
}

function scrivi0() {
    calc.textContent += "0"
}

function scrivi1() {
    calc.textContent += "1"
}

function scrivi2() {
    calc.textContent += "2"
}

function scrivi3() {
    calc.textContent += "3"
}

function scrivi4() {
    calc.textContent += "4"
}

function scrivi5() {
    calc.textContent += "5"
}

function scrivi6() {
    calc.textContent += "6"
}

function scrivi7() {
    calc.textContent += "7"
}

function scrivi8() {
    calc.textContent += "8"
}

function scrivi9() {
    calc.textContent += "9"
}

function scriviDiviso() {
    calc.textContent += " / "
}

function scriviPer() {
    calc.textContent += " * "
}

function scriviMeno() {
    calc.textContent += " - "
}

function scriviPiu() {
    calc.textContent += " + "
}

function scriviPunto() {
    calc.textContent += "."
}

function uguale() {
    let expression = calc.textContent;
    let result = eval(expression); 
    calc.textContent = result;
  }
  